require('dotenv').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');


const connectDB = require('./server/config/db');

const app = express();
const PORT = 5000 ||process.env.PORT;

connectDB();

//bodyparser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.use(expressEjsLayouts);
app.set('view engine','ejs');
app.set('layout','./layouts/main');

app.use('/',require('./server/routes/main'));

app.listen(PORT,()=>{
    console.log(`Server on ${PORT}`);
})