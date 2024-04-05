function PersonForm({newName, newTel, onNameChangeHandle, onTelChangeHandle, onSubmitClickHandle}) {
    return (
        <form>
            <div>name: <input value={newName} onChange={onNameChangeHandle} /></div>
            <div>number: <input value={newTel} onChange={onTelChangeHandle}/></div>
            <div>
            <button type="submit" onClick={onSubmitClickHandle}>add</button>
            </div>
      </form>
    )
}

export default PersonForm