import express, { urlencoded } from 'express';
import { userModel } from './user.model.js';
import mongoose from 'mongoose';
const app = express();
const DB_url = 'mongodb+srv://valnas:Jonas1994@cluster0.idqeylu.mongodb.net/redis?retryWrites=true&w=majority'
import jwt from 'jsonwebtoken';

import redis from 'redis'


//middlewares
app.use(urlencoded({ extended: false}));
app.use(express.json());


 //connexion db
mongoose.connect(DB_url)
try{ 
    app.listen(8000, () => {
    console.log('DB connected and app is lisning on port 8000')
    }
    )
}
    catch(err){
         res.status(500).json(err);
        }
