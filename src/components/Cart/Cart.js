import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Card, CardBody, CardText, CardTitle, CardFooter, Button } from 'reactstrap';
import { BsFillTrashFill } from 'react-icons/bs'
import { Link, Navigate } from "react-router-dom";

const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem, powerTotal, isOff } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className="container my-2">
        <h2>Empty Cart</h2>
        <hr />
        <Link to="/" className="btn btn-primary"> back to shopping </Link>
      </div>
    )
  }

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
              <CardText>Items: {item.cantidad}</CardText>
            </CardBody>
            <CardFooter>
              <p>Price: ${item.price}</p>
              <Button className="btn btn-danger" onClick={() => removeItem(item.id)}> <BsFillTrashFill /> </Button>
              {(item.cantidad > 1 && item.off) && <CardText> {item.off}% OFF! </CardText>}
            </CardFooter>
          </Card>
        </div>
      ))}

      <div className="total-empty">
        {
          isOff ?
            <h4>Total: ${isOff()}</h4>
            :
            <h4>Total: ${cartTotal()}</h4>}
        {/* <h4>Total: ${cartTotal()}</h4> */}
        <h6>Power Increase: {powerTotal()}%</h6>
        <div  className="my-2">
          <Link to='/'>
            <Button className="btn btn-danger empty-cart" onClick={emptyCart}> Empty </Button>
          </Link>

        {/* tengo pensado habilitar boton de pago */}
          {/* <Button className="btn btn-success empty-cart"> Pay </Button> */}
          <Link className="btn btn-success" to='/Checkout'> Finish </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart