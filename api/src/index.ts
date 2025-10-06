import express from "express";
import cors from "cors";
import orderRouter from "./routes/orderRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/order", orderRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
