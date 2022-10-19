import express from 'express';
import cors from "cors";
import { routes } from './routes.js';
const app = express();

const port = process.env.PORT = 4000



app.use(express.json());
//app.use(routes);

app.listen(8081, () => {
    console.log("servidor rodando")
})
