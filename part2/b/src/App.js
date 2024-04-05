import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const newNoteTemp = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random < 0.5
    }
    setNotes(notes.concat(newNoteTemp))
    setNewNote('')
  }

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const toggleImportanceOf = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => { setShowAll(!showAll)}}>
          show {showAll ? "important" : "all" }
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note 
            key={note.id}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App;