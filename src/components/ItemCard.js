import React from 'react';
import { Card, CardBody, CardText, CardTitle, CardFooter, Button } from 'reactstrap';
import ItemCount from './ItemCount';
import './itemCard.css';

const ItemCard = (props) => {

    const { type, part, hp, stock, price, img } = props;
    const addToCart = (count) => {
        count > 0 ? console.log("se anadio al carrito", count, type, part, price) : console.log("no se puede agregar");
    }

    return (
        <>
            <Card className="my-3 cards-parts" style={{ width: '17rem' }}>

                <img src={img} alt=""></img> 
                <CardBody className='card-body'>
                    <CardTitle tag="h4">
                        {type}
                    </CardTitle>

                    <CardText>
                        {part}
                    </CardText>

                    <CardText>
                        <p> Power increase %: {hp} </p>
                    </CardText>

                    <Button className='buttons-addrest'>
                        <ItemCount stock={stock} addToCart={addToCart} />
                    </Button>
                </CardBody>

                <CardFooter>
                    <p>Stock: {stock} </p>
                    <p>Precio : ${price}</p>
                </CardFooter>

            </Card>
        </>
    )
}

export default ItemCard