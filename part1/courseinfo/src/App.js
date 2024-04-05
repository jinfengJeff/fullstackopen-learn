import { useState } from 'react'

// // ---------------- stateful component start ----------------

// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({onClick, text}) => (
//   <button onClick={onClick} >
//     {text}
//   </button>
// )

// const App2 = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   console.log('rendering...', counter)

//   return (
//     <div>
//       <Display counter={counter}></Display>
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setToZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   )
// }

// // ---------------- stateful component end ----------------





// ------------------- complex state start -------------------

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([])

/**
  let obj1 = {a:11, b:22, c:33, d:44}
  let obj2 = {a:111, b:222, c:333, d:444}

  console.log({a:1, ...obj1, c:3, d:4}) // {a: 11, b: 22, c: 3, d: 4}
  console.log({a:1, ...obj2, c:3, d:4}) // {a: 111, b: 222, c: 3, d: 4}

  console.log({a:1, b:2, ...obj1, d:4}) // {a: 11, b: 22, c: 33, d: 4}
  console.log({a:1, b:2, ...obj2, d:4}) // {a: 111, b: 222, c: 333, d: 4}
 */

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )

}
// ------------------- complex state end -------------------




export default App;