// server.js

import express from "express";
import { connectToMongoDB } from "./database.js"; 
import cardRouter from "./routers/cardRouter.js";

const app = express();
const PORT = process.env.PORT || 3004;

connectToMongoDB().catch(error => {
    console.error("Error connecting to MongoDB:", error);
});

app.use('/api/cards', cardRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
