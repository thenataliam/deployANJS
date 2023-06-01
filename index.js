const express = require("express"); //importar express
const bodyParser = require("body-parser");
const app = express(); //crear al servidor
const port = process.env.PORT || 3000;
/* const cors=require("cors"); */
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
/* app.use(cors); */
const usuarios= [
    {id:0, nombre:'Christopher', correo:'chris@correo.com', mensaje:'Mensaje de Chris'},
    {id:1, nombre:'Harry', correo:'harry@correo.com', mensaje:'Mensaje de Harry'}
];

app.get('/metodo/mostrar', (req, res)=> {
res.send(usuarios);
});
app.listen(port, () => {
 console.log(`hola servidor ejecucion en http://localhost:${port}`);
})