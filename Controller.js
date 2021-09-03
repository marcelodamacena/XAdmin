const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');
const db = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user = models.User;
let tracking = models.Tracking;
let product = models.Product;
let usuarios = models.usuarios;
let bairro = models.bairros;

app.get('/create', async (req, res) => {
    let create = await usuarios.create({
        login: "joao de deus",
        senha_app: "12345",
        
    });
    res.send('Usuário criado com sucesso!');
});

app.get('/read', async (req, res) => {
    let read = await bairro.findAll({ raw: true });
    console.log(read);  
});

app.post('/login', async (req, res) => {    

    let response = await usuarios.findOne({
        //aonde esta escrito login,  e o que importa para a tabela no banco de dados.
        where: { login: req.body.login, senha_app: req.body.senha_app }
    });

    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    }
});



let port = process.env.PORT || 3001;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando');
});