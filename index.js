import express, { urlencoded } from 'express';
import { userModel } from './user.model.js';
import mongoose from 'mongoose';
const app = express();
const DB_url = 'mongodb+srv://valnas:Jonas1994@cluster0.idqeylu.mongodb.net/redis?retryWrites=true&w=majority'
import jwt from 'jsonwebtoken';

import redis from 'redis'
