const Total = function ({ parts }) {
    const totalCount = parts.reduce((accumulator, part) => accumulator + part.exercises, 0)
    return (
        <h2> total of {totalCount} exercises</h2>
    )
}

export default Total