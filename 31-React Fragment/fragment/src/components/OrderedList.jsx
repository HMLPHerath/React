import ListItems from "./ListItems"

const OrderedList = ({itemlist})=>{

    return(
        <ol>
            <ListItems items={itemlist}/>
        </ol>
    )
}

export default OrderedList;