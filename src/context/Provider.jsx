import React, { useState } from 'react'
import appContext from './AppContext'

const Provider = ({children}) => {

    const [userName, setUsername] = useState(undefined)
    const [userPassword, setUserPassword] = useState(undefined)

const data = {
    userName, 
    setUsername,
    userPassword, 
    setUserPassword,

}

  return (
    <appContext.Provider value={data}>
        {children}
    </appContext.Provider>
  )
}

export default Provider