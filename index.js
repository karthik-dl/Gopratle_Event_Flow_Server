import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import RequirementDb from "./src/models/RequirementDb.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.post("/api/requirements", async(req, res) => {
    try {
        console.log(req.body);

        const data = await RequirementDb.create(req.body);
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected successfully"))
    .catch((err) => console.log("MongoDB connection error:", err));



const PORT=process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});