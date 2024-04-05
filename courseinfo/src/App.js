import { useState } from 'react'

// // ------------------- courseinfo start -------------------

// const Header = (props) => {
//   return (
//     <h1>
//       { props.course }
//     </h1>
//   )
// }

// const Content = (props) => {
//   const data = props.contentParagraph;
//   console.log(data)
//   return (
//     <section>
//       {
//         data.map((item) => (
//           <ContentPara content={item} ></ContentPara>
//         ))
//       }
//     </section>
//   )
// }

// const ContentPara = (props) => {
//   console.log(props)
//   return (
//     <p> {props.content.part} {props.content.exercises} </p>
//   )
// }

// const Total = (props) => {
//   return (
//     <footer>
//       Number of exercises {props.total}
//     </footer>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   const ContentParagraph = []
//   ContentParagraph.push({part:part1, exercises:exercises1})
//   ContentParagraph.push({part:part2, exercises:exercises2})
//   ContentParagraph.push({part:part3, exercises:exercises3})

//   return (
//     <div>
//       <Header course={course} />
//       <Content contentParagraph={ContentParagraph} ></Content>
//       <Total total={exercises1 + exercises2 + exercises3} />
//     </div>
//   )
// }

// // ------------------- courseinfo end -------------------





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





// // ------------------- complex state start -------------------

// const App3 = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([])

// /**
//   let obj1 = {a:11, b:22, c:33, d:44}
//   let obj2 = {a:111, b:222, c:333, d:444}

//   console.log({a:1, ...obj1, c:3, d:4}) // {a: 11, b: 22, c: 3, d: 4}
//   console.log({a:1, ...obj2, c:3, d:4}) // {a: 111, b: 222, c: 3, d: 4}

//   console.log({a:1, b:2, ...obj1, d:4}) // {a: 11, b: 22, c: 33, d: 4}
//   console.log({a:1, b:2, ...obj2, d:4}) // {a: 111, b: 222, c: 333, d: 4}
//  */

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   const Button = ({ handleClick, text }) => (
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )

//   const History = (props) => {
//     if (props.allClicks.length === 0) {
//       return (
//         <div>
//           the app is used by pressing the buttons
//         </div>
//       )
//     }
//     return (
//       <div>
//         button press history: {props.allClicks.join(' ')}
//       </div>
//     )
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )

// }
// // ------------------- complex state end -------------------





// ------------------- Unicafe start ------------------- 

const FeedbackBtn = ( {handleClick, text} ) => {
  return (
    <button onClick={handleClick} >{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const countAll =  good + neutral + bad
  const countAverage = countAll > 0 ? ((good - bad) / countAll).toFixed(1) : `-`
  const countPositive = countAll > 0 ? `${ (good / countAll * 100).toFixed(1)} %` : `-`

  // const countAll = () => good + neutral + bad
  // const countAverage = () => (good - bad) / countAll()
  // const countPositive = () => `${ (good / countAll() * 100)} %`

    if(countAll === 0) {
      return (
        <section>
          <h2 class="statistics" > statistics </h2>
          <p>No feedback given</p>
        </section>
      )
    } else {
      return (
        <section>
          <h2 class="statistics" > statistics </h2>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={countAll} />
          <StatisticLine text="average" value={countAverage} />
          <StatisticLine text="postive" value={countPositive} />
        </section>
      )
    }
    
}

const Unicafe = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      
      <FeedbackBtn handleClick={() => { setGood(good+1) }} text="good" />
      <FeedbackBtn handleClick={() => { setNeutral(neutral+1) }} text="neutral" />
      <FeedbackBtn handleClick={() => { setBad(bad+1) }} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}


export default Unicafe;
