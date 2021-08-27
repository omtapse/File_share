const express = require('express');
const app = express();
const path = require('path')
app.use(express.static('public'));
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs')
app.use(express.json());
app.get("/",(req,res)=>{
    res.sendFile("./index.html", { root: __dirname })
})

const connectDB = require('./config/db');
connectDB()



//Routes
app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'))
app.use('files/download', require('./routes/download'))

app.listen(process.env.PORT ||3000,()=>{
    console.log("Listening on port 3000")
})