
function Validacao(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    /*const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/*/
    
    if (values.name === ""){
        error.name = "Preencha esse campo"
    }else{
        error.name = ""
    }

    if (values.email === ""){
        error.email = "Preencha esse campo"
    
    }else if(!email_pattern.test(values.email)){
        error.email = "email invalido"

    }else{
        error.email = ""
    }

    if (values.password === ""){
        error.password = "Preencha esse campo"

    }/*else if(!password_pattern.test(values.password)){
    error.password = "senha invalida"

    }*/else{
    error.password = ""
    }
 
  return error;
}

export default Validacao