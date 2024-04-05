function Person({name, number, onClickDeleteHandle}) {
    // const {name, number} = props.person
    return (
        <p>
            <span>{name} {number}</span><button onClick={onClickDeleteHandle}>delete</button>
        </p>
    )
}

export default Person