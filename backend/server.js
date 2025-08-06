import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cardsRoutes from "./routes/cardsRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

dotenv.config();

const app = express();

// middleware
if (process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173",
        })
    );
}
app.use(express.json()); // this middleware will parse JSON bodies: req.body


app.listen(process.env.SERVER_PORT, () => {
    console.log("Server running on port: " + process.env.SERVER_PORT);
});

app.use("/api/cards", cardsRoutes);
app.use("/api/search", searchRoutes);