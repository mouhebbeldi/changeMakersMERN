const express =require('express');
const connectDB = require('./config/db');
const app=express();

//init middleware
app.use(express.json({extented:false}));

const PORT =  process.env.PORT  || 5000;

//connection to database
connectDB();

// the routes i created
app.use('/changeMakers/rates',require('./routes/rates'));
app.use('/changeMakers/users',require('./routes/users'));
app.use('/changeMakers/auth',require('./routes/auth'));

//open up the server port
app.listen(PORT,() =>{

    console.log('server is runnning on '+ PORT);
});
/******************************************************************************** */