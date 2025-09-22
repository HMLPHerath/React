import ListItems from "./ListItems";

const UnOrderedList = ({itemlist})=>{

    return(
        <ul>
            <ListItems items={itemlist}/>
        </ul>
    )
}

export default UnOrderedList;