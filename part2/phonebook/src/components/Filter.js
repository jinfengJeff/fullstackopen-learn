function Filter({ name, onChangeHandle }) {

    return (
        <div>filter shown with <input value={name} onChange={onChangeHandle} /> </div>
    )
}

export default Filter