const express = require("express");
const cors = require("cors");
const pool = require("./database")

const app = express();

app.use(express.json());
app.use(cors());

app.get("/cadastro", (req, res) => {
    console.log(req.body);
    res.send("Resposta bem sucedida: " + req.body);
});

app.post("/cadastro", (req, res) => {
    const nome = req.body["nome"];
    const email = req.body["email"];
    const senha = req.body["senha"];

    const inserirDados = `INSERT INTO Usuarios (nome, email, senha) VALUES ('${nome}','${email}','${senha}');`

    pool
        .query(inserirDados)
        .then((response) => {
            console.log("Dados Salvos!");
            console.log(response);
        })
        .catch((err) => {
            console.log("Erro ao salvar dados: " + err);
        });

    console.log(req.body);
    res.send("Resposta bem sucedida: " + req.body);
});

app.listen(3001, () => console.log("Server is running on localhost:3001"));