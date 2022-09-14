import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle, CardFooter } from 'reactstrap';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemListContainer/ItemCount';
import './ItemDetail.css';


const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(1)

    const { cart, addToCart, isInCart } = useContext(CartContext)
    console.log(cart)

    const { id, type, part, hp, stock, price, img } = item;

    const handleLoad = (count) => {
        const itemToCart = {
            id: item.id,
            type: item.type,
            part: item.part,
            hp: item.hp,
            price: item.price
        }

        // addToCart([...cart, itemToCart])
        count > 0 ? addToCart(itemToCart) : console.log("no se puede agregar");

        // console.log(isInCart(item.id))
    }

    return (
        <div>
            <Card className="my-3 cards-parts" style={{ width: '17rem' }}>
                <CardBody className='card-body'>
                    <img src={img} alt="" ></img>
                    <CardTitle tag="h4">Type: {type}</CardTitle>
                    <CardText> {part} </CardText>
                    <CardText> Power increase %: {hp} </CardText>
                    {isInCart(item.id) ?
                        <Link to='/Cart' className="btn btn-success"> Finish </Link> :
                        <ItemCount
                            className='buttons-addrest'
                            stock={stock}
                            handleLoad={handleLoad}
                            counter={cantidad}
                            setCounter={setCantidad}

                        />
                    }
                </CardBody>
                <CardFooter>
                    <p>Stock: {stock} </p>
                    <p>Price : ${price}</p>
                </CardFooter>

            </Card>
        </div>
    )
}

export default ItemDetail