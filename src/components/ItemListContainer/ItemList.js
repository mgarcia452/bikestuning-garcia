// const ItemList = ({ data = [] }) => {
//     return (
//         <div className='row'>
//             {/* loading ? <Spinner color="danger" /> : */}
//             {data.map((prod) => <Item product={prod} key={prod.id} />
//             )}
//         </div>
//     )
// }

// export default ItemList

import Item from './Item'
const ItemList = ({ products = [] }) => {

    return (
        <div className="container my-4 achus">
            {products.map((prod) =>
                <Item product={prod} key={prod.id} />
            )}
        </div>
    )
}

export default ItemList