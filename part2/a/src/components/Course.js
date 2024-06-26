import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({ course }) => (
    <div>
      <Header title={course.name} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  )

  export default Course