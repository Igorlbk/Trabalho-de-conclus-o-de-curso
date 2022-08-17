import express from 'express';
import { routes } from './routes.js';
const app = express();

app.use(express.json());
app.use(routes);

app.listen(8081, () => {
    console.log("servidor rodando")
})
