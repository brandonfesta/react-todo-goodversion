export default function TextFilter({textFilter, setTextFilter}){
    return (
        <input type="text" value={textFilter} onChange={(event) => setTextFilter(event.target.value)}/>
    )
}