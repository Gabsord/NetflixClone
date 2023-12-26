import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiLogin, CiLogout } from 'react-icons/ci'
import appContext from '../../context/AppContext'
import './Header.css'

const Header = () => {

  const [isHeaderBlack, setIsHeaderBlack] = useState(false)
  const [userLogin, setUserLogin] = useState(false)
  const { userName, setUsername} = useContext(appContext)
  const { userPassword, setUserPassword } = useContext(appContext)


  const checkIsHeaderBlack = () => {
    window.scrollY > 15 ? setIsHeaderBlack(true) : setIsHeaderBlack(false)
  }

  const logout = () =>{
    setUserLogin(false)
    setUsername(undefined)
    setUserPassword(undefined)
  }

  window.addEventListener('scroll', checkIsHeaderBlack)

  useEffect(() => {
    const checkIsLoged = () => {
      userName && userPassword ? setUserLogin(true) : setUserLogin(false)
    }
    checkIsLoged(userLogin)
  }, [])

  return (
    <>
      <div className='headerContainer' style={{ backgroundColor: `${isHeaderBlack ? '#000' : ''}` }}>
        <div className='header'>
          <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
          {
            userLogin ?

              <div className='logedUser'>
                <button
                  onClick={logout}
                  className='logoutBtn'
                ><CiLogout />
                  Sair
                </button>
                <div className='userInfo'>
                  <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                  <p>{userName}</p>
                </div>
              </div>
              :

              <div className='userBtns'>

                <Link to='/login'><button className='loginBtn'><CiLogin />Entrar</button></Link>

              </div>
          }



        </div>

      </div>
    </>
  )
}

export default Header

