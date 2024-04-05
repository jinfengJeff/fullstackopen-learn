// ------------------- courseinfo start -------------------

const Header = (props) => {
  return (
    <h1>
      { props.course }
    </h1>
  )
}

const Content = (props) => {
  const data = props.contentParagraph;
  console.log(data)
  return (
    <section>
      {
        data.map((item) => (
          <ContentPara content={item} ></ContentPara>
        ))
      }
    </section>
  )
}

const ContentPara = (props) => {
  console.log(props)
  return (
    <p> {props.content.part} {props.content.exercises} </p>
  )
}

const Total = (props) => {
  return (
    <footer>
      Number of exercises {props.total}
    </footer>
  )
}

const Courseinfo = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const ContentParagraph = []
  ContentParagraph.push({part:part1, exercises:exercises1})
  ContentParagraph.push({part:part2, exercises:exercises2})
  ContentParagraph.push({part:part3, exercises:exercises3})

  return (
    <div>
      <Header course={course} />
      <Content contentParagraph={ContentParagraph} ></Content>
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default Courseinfo;

// ------------------- courseinfo end -------------------