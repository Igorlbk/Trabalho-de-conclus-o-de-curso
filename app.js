import express from 'express';
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    res.send(__dirname + "/paginas/index.html");
});

app.listen(8081, () => {
    console.log("servidor rodando")
})



