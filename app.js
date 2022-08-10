const express = require('express')

//app
const app = express
app.use(express.json());

app.listen(8080, () => {
    console.log("servidor rodando")
})

app.get("/", async (req, res) => {
    res.sendfile(__dirname + "/paginas/index.html");
});



