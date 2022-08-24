// export const Item = ({ producto }) => {
//     const { id, nombre, precio } = producto;

//     return (
//         <div className="productos">
//             <h4>Nombre: {nombre}</h4>
//             <p>Id: {id}</p>
//             <p>Precio: {precio}</p>
//         </div>
//     )
// }
export const Item = ({ producto }) => {
    const { type, id, part, hp, price } = producto;

    return (
        <div className="productos">
            <h4>Type: {type}</h4>
            <p>Id: {id}</p>
            <p>Part: {part}</p>
            <p>Hp: {hp}</p>
            <p>Price: {price}</p>
        </div>
    )
}