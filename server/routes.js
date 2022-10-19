
import express from 'express';
const routes = express.Router();

routes.get("/", async (req, res) => {
    return res.status(200).json({
        msg : "Running route!!"
    })
});

export { routes }