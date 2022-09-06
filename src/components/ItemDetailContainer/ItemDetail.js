const ItemDetail = ({item}) => {

    return (
        <div className="container my-5">
            <img src={item.img}/>
            <h3>{item.part}</h3>
            <p>{item.id}</p>
            <p>{item.type}</p>
            <h4>{item.price}</h4>
        </div>
    )
}

export default ItemDetail