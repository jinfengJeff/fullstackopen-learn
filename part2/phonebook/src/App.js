import { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

import Api from './service'

function App() {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newTel, setNewTel] = useState('')
  const [filterName, setFilterName] = useState('')
  const [handleMsg, setHandleMsg] = useState('')
  
  const nameChangeHandle = (e) => {
    setNewName(e.target.value)
  }

  const telChangeHandle = (e) => {
    setNewTel(e.target.value)
  }

  const clearInput = () => {
    setNewName('')
    setNewTel('')
  }

  const submitClickHandle = (e) => {
    e.preventDefault();

    const numberReg = /^(?:(?:\+|00)86)?1\d{10}$/

    if(!newName) {
      alert(`Please enter name`)
      return
    }

    if(!newTel) {
      alert(`Please enter number`)
      return
    }

    if(persons.filter( item => item.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    if(!numberReg.test(newTel)) {
      alert(`Number is invalid`)
      return
    }

    Api.create({
      name: newName,
      number:newTel
    }).then( data => {
      setPersons(persons.concat(data))
      clearInput()
      setHandleMsg(`Added ${data.name}`)
      setTimeout( () => {
        setHandleMsg("")
      }, 3000)
    })

  }

  const clickDeleteHandle = (id) => () => {
    Api.remove(id).then( res => {
      setPersons(persons.filter(item => item.id !== res.id))
    })
  }

  const filterNameChangeHandle = (e) => {
    setFilterName(e.target.value)
  }

  useEffect(() => {
    Api.getAll().then( data => {
      setPersons(data)
    })
  }, [])

  const filterPerson = persons.filter( item => item.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <h3 className='success'> { handleMsg } </h3>
      <Filter name={filterName} onChangeHandle={filterNameChangeHandle} />
      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        newTel={newTel}
        onNameChangeHandle={nameChangeHandle}
        onTelChangeHandle={telChangeHandle}
        onSubmitClickHandle={submitClickHandle}
      />
      <h3>Numbers</h3>
      {
        // filterPerson.map(item => <Person key={item.name} person={item} /> )
        filterPerson.map(item => <Person key={item.name} {...item} onClickDeleteHandle={clickDeleteHandle(item.id)} /> ) // { ...item } 批量传递props
      }
    </div>
  )
}

export default App;
