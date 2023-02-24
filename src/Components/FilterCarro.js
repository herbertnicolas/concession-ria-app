function FilterCarro(props){

    const dropDownChangeHandler = (event) => {
        props.onSelect(event.target.value);
    }

    return(
        <div>
            {/* crie um dropdown para mim com o atributo portas */}
            <select value={props.selected} onChange={dropDownChangeHandler}>
                <option value="2">2 portas</option>
                <option value="4">4 portas</option>
            </select>
        </div>
    )
}
export default FilterCarro;