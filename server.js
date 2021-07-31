const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({message: 'Olá mundo estou a funcionar! \n À maneira!'});
})

app.listen(3001,()=>{
    console.log('API a correr na porta 3001');
})
