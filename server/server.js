import express from 'express'
import'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import dns from 'dns';
import adminRouter from './routers/adminRoutes.js';
import blogRouter from './routers/blogRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

//change dns
dns.setServers(["1.1.1.1" , "8.8.8.8"]);

const app = express();

await connectDB()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (reg, res)=> res.send("API is Working"))
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on port' + PORT)
})

export default app;


