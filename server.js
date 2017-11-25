const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:12345678@localhost:5432/agenda');

sequelize.authenticate()
.then(() => {
    console.log('Conexão realizada com sucesso.');
})
.catch(err => {
    console.error('não foi possivel conectar:', err);
});

const User = sequelize.define('contatos',{
    nome: {
        type: Sequelize.STRING
    },
    telefone: {
        type:Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    tipo: {
        type: Sequelize.STRING
    }
    
});

