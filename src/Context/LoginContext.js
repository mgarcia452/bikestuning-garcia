import { createContext, useContext, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {

    const [user, setUser] = useState({
        user: '',
        logged: false,
        error: ''
    })
    const usuarios = [
        {
            email: 'dai@gmail.com',
            password: '1'
        },
        {
            email: 'mati@gmail.com',
            password: '2'
        },
        {
            email: 'lauti@gmail.com',
            password: '3'
        }

    ]

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)
        if (match) {
            if (match.password === values.pass) {
                setUser({
                    user: match.email,
                    logged: true,
                    error: ''
                })
            } else {
                setUser({
                    user: '',
                    logged: false,
                    error: 'wrong pass'
                })
            }
        } else {
            setUser({
                user: '',
                logged: false,
                error: 'wrong user'
            })
        }
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false,
            error: ''
        })
    }

    return (
        <LoginContext.Provider
            value={{
                user,
                login,
                logout
            }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}