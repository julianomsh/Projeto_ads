import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='div-primaria'>
        <div>
            <h1>Login</h1>
            <form action=''>
                <div className='input-css'>
                    <input type='email' placeholder='E-mail' className='inputs'/>                   
                </div>
                <div className='input-css'>
                     <input type='password' placeholder='Senha' className='inputs'/>                 
                </div>
                <button className='btn btn sucess border'><strong>Entrar</strong></button>
                <p>Ainda não tem uma conta?</p>
                <Link to='/Registrar' className='btn btn sucess border'>Criar conta.</Link>
            </form>
        </div>
    </div>
  )
}

export default Login