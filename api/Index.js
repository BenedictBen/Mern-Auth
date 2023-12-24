import express from 'express';
import mongoose from 'mongoose';
import userRoutes from "./routes/user.route.js"
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
})

const app = express();

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})

// Creating api routes

app.use("/api/user", userRoutes);