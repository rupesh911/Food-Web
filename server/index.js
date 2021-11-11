import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import foodRoutes from './routes/foodRoutes.js';
import cartRoutes from './routes/cartRoutes.js';


const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get('/',(request,response) =>{
    response.send('WELCOME TO BACKEND');
  
});

app.use('/foodItems', foodRoutes);
app.use('/cartItems', cartRoutes);

 const CONNECTION_URL= 'mongodb+srv://vivek_kumar:La8VWbv9au2YvEP@cluster0.qwbtc.mongodb.net/Cluster0?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;
console.log("DataBase is Connected Successfully");

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`)))
    .catch((error) => console.log(`${error} Did not Connect`));
    

mongoose.set('useFindAndModify', false);