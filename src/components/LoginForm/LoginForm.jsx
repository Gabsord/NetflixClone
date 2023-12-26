import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import appContext from '../../context/AppContext'
import './LoginForm.css'

const LoginForm = () => {



    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const {userName,setUsername} = useContext(appContext)
    const {userPassword,setUserPassword} = useContext(appContext)

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        setUsername(name)
        setUserPassword(password)
        setName('')
        setPassword('')
        navigate('/')
       
    }



    return (
        <>
            <div className='loginSection'>
                <Link to='/'><img className='logoImg' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" /></Link>
                <div className='overlay'>
                    <div className='formContainer'>
                        <h1>Entrar</h1>
                        <form 
                        className='loginForm'
                        onSubmit={(e)=>{handleLogin(e)}}
                        >

                            <input
                                className='userNameInput'
                                placeholder='Nome de usuário '
                                required
                                type="text"
                                onChange={(e) => { setName(e.target.value) }}
                                value={name}
                                
                            />

                            <input
                                className='passwordInput'
                                type="password"
                                placeholder='Senha'
                                required
                                onChange={(e) => { setPassword(e.target.value) }}
                                value={password}
                            />

                            <button
                                className='submitBtn'
                                type='submit'
                            >Entrar</button>

                            <div className='checkBoxArea'>
                                <div>
                                    <input id='checkbox' type="checkbox" />
                                    <label className='label' htmlFor="checkbox"> Lembre-se de mim</label>
                                </div>
                                <Link>Precisa de ajuda?</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginForm