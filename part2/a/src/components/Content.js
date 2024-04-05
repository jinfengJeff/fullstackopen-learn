import Part from "./Part"

const Content = ({course}) => {
    const { parts } = course
    return (
        <section className="content">
            {
                parts.map( item => <Part key={item.id} content={item.name} exercise={item.exercises}></Part> )
            }
        </section>
    )
}

export default Content