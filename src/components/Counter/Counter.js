import { Button } from 'reactstrap';

const Counter = ({ stock, handleLoad, count, setCount }) => {

    const handleSubstract = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const handleReset = () => {
        if (count !== 1) {
            setCount(count = 1)
        }
    }

    return (
        <div className='button-counter'>
            <div className='btn buttons'>
                <Button onClick={handleAdd}> + </Button>
                <h3> {count} </h3>
                <Button className='btn' onClick={handleSubstract} disabled={count <= 1}> - </Button>
            </div>
            <div>
                <Button className="btn btn-primary" disabled={count <= 0} onClick={() => handleLoad(count)}> Add </Button>
                <Button className="btn-danger" onClick={handleReset}> Reset </Button>
            </div>
        </div>
    )
}

export default Counter