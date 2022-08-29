import React, { useState } from 'react';
import { Button } from 'reactstrap';

const ItemCount = ({ stock, addToCart }) => {
    const [count, setCount] = useState(0);
    const handleAdd = () => {

        count < stock ? setCount(count + 1) : console.log("no hay mas, pipi, espera q vuelva a entrar")
    }
    const handleSubstract = () => {
        count > 0 ? setCount(count - 1) : console.log("si queres te vendemos ilusiones tambien");
    }

    return (
        <div className='button-counter'>
            <Button onClick={handleSubstract}> - </Button>
            <h3> {count} </h3>
            <Button onClick={handleAdd}> + </Button>
            <Button disabled={stock <= 0} onClick={() => addToCart(count)}> Add </Button>
        </div>
    )
}

export default ItemCount