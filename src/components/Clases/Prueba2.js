import React from 'react'

const Prueba2 = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }
    return (
        <div className='container my-5'>
            <h2> Prueba2 </h2>
            <hr></hr>

            <form onSubmit={handleSubmit}>
                <input type={'text'} className='form-control my-2'/>
                <button className='btn btn-primary' type='submit' >Send</button>
            </form>
        </div>
    )
}

export default Prueba2