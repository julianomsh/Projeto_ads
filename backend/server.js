const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "db4free.net",
    user: "adsunicesumar",
    password: "unicesumar",
    database: "ads5semestre"
})

app.post('/Registrar', (req, res) => {
    const sql = "INSERT INTO login (`nome`, `email`, `password`) VALUES (?) ";
    const values = [
        req.body.nome,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    }) 
})

app.post('/Login', (req, res) => {
    const sql = "SELECT * FROM  login WHERE `email` = ? AND `password` = ?  ";

    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0 ){
            return res.json("Success")
        }else {
            return res.json("erro")
        }
    }) 
})

app.listen(8081, ()=>{
    console.log("teste")
})