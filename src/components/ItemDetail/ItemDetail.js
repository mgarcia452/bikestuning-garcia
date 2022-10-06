import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle, CardFooter } from 'reactstrap';
import { CartContext } from '../../Context/CartContext';
import Counter from '../Counter/Counter';
import './ItemDetail.css';


const ItemDetail = ({ item }) => {

    const { addToCart, isInCart } = useContext(CartContext)

    const [amount, setAmount] = useState(1)

    const { off, type, part, hp, stock, price, img } = item;

    const handleLoad = (count) => {
        const itemToCart = {
            id: item.id,
            type: item.type,
            part: item.part,
            hp: item.hp,
            price: item.price,
            off: item.off,
            amount
        }
        count > 0 ? addToCart(itemToCart) : console.log("cannot add, buddy");
    }

    const discountPrice = () => {
        if (amount > 1) {
            return (amount * (price - (price * off) / 100))
        } else {
            return price;
        }
    }

    return (
        <div>
            <Card className="my-5 cards-parts">
                <img src={img} alt="" ></img>
                <CardBody className='card-detail-body'>
                    <CardTitle tag="h4">Type: {type}</CardTitle>
                    <CardText> {part} </CardText>
                    <CardText> Power increase %: {hp} </CardText>
                    <p>Stock: {stock} </p>
                    <p>Price : ${discountPrice()}</p>
                    <CardFooter className='card-footer'>
                        {isInCart(item.id) ?
                            <>
                                <Link to='/Cart' className="btn btn-success"> Cart </Link>
                                <Link to='/' className="btn btn-info"> products </Link>
                            </> :
                            <Counter
                                className='buttons-addrest'
                                stock={stock}
                                handleLoad={handleLoad}
                                count={amount}
                                setCount={setAmount}
                            />
                        }
                        {(amount > 1 && off) && <CardText> {off}% OFF! </CardText>}
                    </CardFooter>
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemDetail