const express = require = require ('express')
const app = express()

app.get('/', function (req, res){
    res.send('Acessando via metodo Get')
})

app.post('/alunos', function (req, res){
    res.send('Acessando via POST')
})

app.put('/alunos', function (req , res){
    res.send('Acessando via PUT')
})

app.delete('/alunos', function (req, res){
    res.send('Acessando via DELETE')
})

app.get('/alunos', (req, res) => res.send('Alunos'))
app.get('/professores', (req, res) => res.send('Professores'))
app.get('/cursos', (req, res) => res.send('Cursos'))

app.listen(3000, () => console.log('Exemplo de App Express'))