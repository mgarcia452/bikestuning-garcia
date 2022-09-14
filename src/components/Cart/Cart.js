import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Card, CardBody, CardText, CardTitle, CardFooter, Button } from 'reactstrap';
import { BsFillTrashFill } from 'react-icons/bs'

const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem, powerTotal } = useContext(CartContext)

  return (
    <div className='container my-2 cart-cont'>
      <h1> Cart </h1>
      <br />
      {cart.map((item) => (
        <div key={item.id}>
          <Card className="my-5 cards-parts" style={{ width: '22rem' }}>
            <CardBody className="card-body">
              <CardTitle tag="h4">Type: {item.type}</CardTitle>
              <CardText>{item.part}</CardText>
              <CardText>Power increase: %{item.hp}</CardText>
              <CardText>Unidades: {item.cantidad}</CardText>
            </CardBody>
            <CardFooter>
              <p>Price: ${item.price}</p>
              <Button className="btn btn-danger" onClick={() => removeItem(item.id)}> <BsFillTrashFill /> </Button>
            </CardFooter>
          </Card>
        </div>
      ))}

      <div className="total-empty">
        <h4>Total: ${cartTotal()}</h4>
        <h6>Power Increase: {powerTotal()}%</h6>
        <Button className="btn btn-danger empty-cart" onClick={emptyCart}> Empty </Button>
      </div>
    </div>
  )
}

export default Cart