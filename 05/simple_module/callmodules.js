const cm = require('./ownmodules');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.get('/api/date',(req,res)=>{
    res.write("The date and time is currently: " + cm.myDateTime());
    res.write("\nCreated by: " + cm.myName());
    res.end();
     //res.send(`The date and time is currently: ${cm.myDateTime()} \n Created by: ${cm.myName()}`);
});
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});

