import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  Validacao from'./LoginValidacao';
import axios from  'axios'


function Login() {


const [values, setValues] = useState ({
    email: '',
    password: ''
})

const navigate = useNavigate();

const [errors, setErrors] = useState({})

const handleInput = (event) =>{
   setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
 

}

const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validacao(values))
    if( errors.email === '' && errors.password === ''){
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if(res.data === "Success"){
                navigate('/home');
            }else{
                alert('nao existe')
            }
        })
        .catch(err => console.log(err));
    }
}



  return (
    <div className='div-primaria'>
        <div className='card'>
            <h1>Login</h1>
            <form action='' onSubmit={handleSubmit}>
                <div className='input-css'>
                    <input type='email' placeholder='E-mail' onChange={handleInput} name='email' className='inputs' required/>     
                            {errors.email && <span className='text-danger'>{errors.email}</span>}      
                </div>
                <div className='input-css'>
                     <input type='password' placeholder='Senha' onChange={handleInput} name='password' className='inputs' required/>
                             {errors.password && <span className='text-danger'>{errors.password}</span>}                    
                </div>
                <button type='submit' className='btn btn sucess border'><strong>Entrar</strong></button>

                <p>Ainda não tem uma conta?</p>
                <Link to='/Registrar' className='btn btn sucess border'>Criar conta.</Link>
            </form>
        </div>
    </div>
  )
}

export default Login