// ------------------- Unicafe start ------------------- 
import { useState } from 'react'

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