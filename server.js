const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const db = require('./app/db/models');

db.sequelize.sync({force:true}).then(() => {
    console.log('Tabelas Dropadas e Sincronizadas');
})

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({
        message: "API Server running"
    })
});

require("./app/routes")(app);

app.listen(3000, () => {
    console.log("Servidor rodando")
});