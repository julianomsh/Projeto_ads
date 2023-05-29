function validacao(values){

    let error = {}


    if (values.email === ""){
        error.email = "Preencha esse campo"
    
    }else{
        error.email = ""
    }

    if (values.password === ""){
        error.password = "Preencha esse campo"
    }
    else{
        error.password = ""
    }

}