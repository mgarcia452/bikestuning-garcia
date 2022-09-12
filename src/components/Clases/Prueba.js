import React, { useEffect } from 'react'

const Prueba = () => {

    const handleClick = (e) => {
        console.log(e)
    }

    const handleGreet = (name) => {
        console.log(name)
    }

    // useEffect (( ) => {
    //     window.addEventListener('click', handleClick)

    //     return () => {
    //         window.removeEventListener('click', handleClick)
    //     }
    // }, [])

  return (
    <div className='container my-5'>
        <h2 onClick={ () => handleGreet("Dai")}> Greet </h2>
        <h2 onClick={handleClick}> Prueba </h2>
        <hr></hr>
    </div>
  )
}

export default Prueba