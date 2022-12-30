import express, { urlencoded } from 'express';
const app = express();

//middlewares
app.use(urlencoded({ extended: false}));
app.use(express.json());


//routes
app.post('/register', (req, res) => {
    
})


app.listen(2030);