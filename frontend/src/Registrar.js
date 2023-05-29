import React from 'react'
import { Link } from 'react-router-dom'

function Registrar() {
  return (
    <div className='div-primaria'>
         <div>
        <h1>Cadastro</h1>
         <form action=''>
          <div className='input-css'>
                <input type='text' placeholder='Nome' className='inputs'/>                   
            </div>
            <div className='input-css'>
                <input type='email' placeholder='E-mail' className='inputs'/>                   
            </div>
            <div className='input-css'>
                 <input type='password' placeholder='Senha' className='inputs'/>                 
            </div>
            <button className='btn btn sucess border'><strong>Cadastrar</strong></button>
            <p></p>
            <Link to='/login' className='btn btn sucess border'>ja tenho uma conta.</Link>
        </form>
    </div>
</div>
  )
}

export default Registrar