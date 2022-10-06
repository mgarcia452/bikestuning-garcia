import React, { useContext } from 'react'
import { LoginContext } from '../../Context/LoginContext'
import useForm from '../../hooks/useForm'
import './LoginScreen.css'

const LoginScreen = () => {

    const { login, user } = useContext(LoginContext)
    const { values, handleInputChange } = useForm({
        email: '',
        pass: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return (
        <div className="loggin">
            <form className='my-5'>
                <h6>user:</h6>
                <input
                    name='email'
                    type={'email'}
                    className="form-control my-3"
                    value={values.email}
                    onChange={handleInputChange}
                    placeholder="******@gmail.com"
                />

                <h6>pass:</h6>
                <input
                    name='pass'
                    type={'password'}
                    className="form-control my-3"
                    value={values.pass}
                    onChange={handleInputChange}
                    placeholder="******"
                />

                {user.error && <small className='error'>{user.error}</small>}
                <button className='btn btn-outline-primary' type='submit' onClick={handleSubmit}> Get in! </button>
            </form>
        </div>
    )
}

export default LoginScreen