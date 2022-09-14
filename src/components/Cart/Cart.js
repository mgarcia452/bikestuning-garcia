import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Card, CardBody, CardText, CardTitle, CardFooter } from 'reactstrap';


const Cart = () => {

  const { cart } = useContext(CartContext)

  return (
    <div className='container my-2 cart-cont'>
      <h1> Cart </h1>
      <hr />
      {cart.map((item) => (
        <div key={item.id}>
          <Card className="my-5 cards-parts" style={{ width: '22rem' }}>
            <CardBody className="card-body">
              <CardTitle tag="h4">Type: {item.type}</CardTitle>
              <CardText>{item.part}</CardText>
              <CardText>Power increase: %{item.hp}</CardText>
            </CardBody>
            <CardFooter>
              <p>Price: ${item.price}</p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Cart