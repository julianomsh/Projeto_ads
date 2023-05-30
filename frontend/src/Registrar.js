import React , { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validacao from './RegistrarValidacao';
import axios from  'axios'

function Registrar() {
 
    const [values, setValues] = useState ({
        name:'',
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
        if(errors.name === '' && errors.email === '' && errors.password === ''){
            axios.post('http://localhost:8081/Registrar', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }
 
 
    return (  
    <div className='div-primaria'>
         <div>
        <h1>Cadastro</h1>
         <form action='' onSubmit={handleSubmit}>
          <div className='input-css'>
                <input type='text' placeholder='Nome' className='inputs' name='name' onChange={handleInput} maxLength={50}/>                   
                {errors.name && <span className='text-danger'>{errors.name}</span>}     
            </div>
            <div className='input-css'>
                <input type='email' placeholder='E-mail' className='inputs' name='email' onChange={handleInput} required/>                   
                {errors.email && <span className='text-danger'>{errors.email}</span>}     
            </div>
            <div className='input-css'>
                 <input type='password' placeholder='Senha' className='inputs' name='password' onChange={handleInput} />                 
                 {errors.password && <span className='text-danger'>{errors.password}</span>}     
            </div>
            <button className='btn btn sucess border' type='submit'><strong>Cadastrar</strong></button>
            <p></p>
            <Link to='/' className='btn btn sucess border'>ja tenho uma conta.</Link>
        </form>
    </div>
</div>
  )
}

export default Registrar