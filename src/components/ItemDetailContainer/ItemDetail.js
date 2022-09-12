import { Card, CardBody, CardText, CardTitle, CardFooter, Button } from 'reactstrap';
import ItemCount from '../ItemListContainer/ItemCount';
import './ItemDetail.css';


const ItemDetail = ({ item }) => {

    const { type, part, hp, stock, price, img } = item;

    const addToCart = (count) => {

        const itemToCart = {
            type: item.type, 
            part: item.part, 
            hp: item.hp, 
            price: item.price
        }

        count > 0 ? console.log(itemToCart) : console.log("no se puede agregar");
    }

    return (
        <>
            <Card className="my-3 cards-parts" style={{ width: '17rem' }}>
                <CardBody className='card-body'>
                    <img src={img} alt="" ></img>
                    <CardTitle tag="h4">Type: {type}</CardTitle>
                    <CardText> {part} </CardText>
                    <CardText> <p> Power increase %: {hp} </p> </CardText>

                    <Button className='buttons-addrest'>
                        <ItemCount
                            stock={stock}
                            addToCart={addToCart} />
                    </Button>

                </CardBody>

                <CardFooter>
                    <p>Stock: {stock} </p>
                    <p>Price : ${price}</p>
                </CardFooter>

            </Card>
        </>
    )
}

export default ItemDetail