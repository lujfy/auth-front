
import React ,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  const history = useNavigate()
  const [ name , setName ] = useState('')
  const [ email , setEmail ] = useState('')
  const [ password , setPassword ] = useState('')

  async function registerUser(e) {
    e.preventDefault()

    const respone = await fetch('http://localhost:1337/api/register' , {
      method : 'POST' ,
      
      headers : {
        'Content-Type' : 'application/json' ,
      } ,

      body : JSON.stringify({
        name ,
        email ,
        password
      })
    })

    const data = await respone.json()

    if(data.status === 'ok') {
      history('/login')
    }
  
  }
  return (
    <div className="App">
      <h1> Register </h1>
      <form className='register-form' onSubmit={registerUser}>
        <input
          value={name}
          onChange={ (e) => setName(e.target.value)}
          type='text'
          placeholder='Name'
        />

        <input
          value={email}
          onChange={ (e) => setEmail(e.target.value)}
          type='email'
          placeholder='email'
        />

        <input
          value={password}
          onChange={ (e) => setPassword(e.target.value)}
          type='password'
          placeholder='password'
        />

        <input type='submit' value="Register"/>
      </form>
    </div>
  );
}

export default Register;
