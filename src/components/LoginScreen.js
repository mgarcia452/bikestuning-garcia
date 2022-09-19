import React, { useContext, useState } from 'react'
import { LoginContext } from '../Context/LoginContext'

const LoginScreen = () => {

    const { login, user, logout } = useContext(LoginContext)
    console.log(user)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailChange = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)

    }

    const handlePassChange = (e) => {
        console.log(e.target.value)
        setPass(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ email, pass })
    }


    return (
        <div style={{ backgroundColor: 'aliceblue' }} className="loggin">
            <form className='container my-5'>
                <input
                    type={'email'}
                    className="form-control"
                    value={email}
                    onChange={handleEmailChange}
                />

                <input
                    type={'password'}
                    className="form-control"
                    value={pass}
                    onChange={handlePassChange}
                />

                {user.error && <small>{user.error}</small>}
                <button className='btn btn-primary loggin' type='submit' onClick={handleSubmit}> Ingresar </button>
            </form>
        </div>
    )
}

export default LoginScreen