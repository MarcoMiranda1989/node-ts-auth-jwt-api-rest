import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/authRoutes.js'
import usersRoutes from './routes/userRoutes.js'



dotenv.config()

const app = express()

app.use(express.json())

//rutas

app.use('/auth', authRoutes)
app.use('/users', usersRoutes)


//hacer api rest de usuarios



export default app