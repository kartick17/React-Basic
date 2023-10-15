import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {setUser} = useContext(UserContext);

  const handelSubmit = e => {
    e.preventDefault();
    setUser({username, password})
  }

  return (
    <>
      <input 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />
      <br />
      <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
      />
      <br />
      <button onClick={handelSubmit}>Submit</button>
    </>
  )
}

export default Login