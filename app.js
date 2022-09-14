const express = require('express')
const app = express()
const path=require('path')

app.use(express.static('public'))

app.set('puerto',process.env.PORT || 3000)

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/register',function(req,res){
    res.sendFile(path.join(__dirname,'./views/register.html'))
})

app.get('/ingresar',function(req,res){
    res.sendFile(path.join(__dirname,'./views/ingresar.html'))
})

app.listen(app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria ${app.get('puerto')}`));