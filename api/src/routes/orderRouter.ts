import express from "express";

const orderRouter = express.Router();

orderRouter.get("/", (req, res) => {
    const { market, price, quantity, side, userId } = req.body;
    
});

export default orderRouter;