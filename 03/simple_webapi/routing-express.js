const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// step 2
app.get('/',(req,res)=>{
     res.send('Home Pang');
});
app.get('/overview',(req,res)=>{
    res.send('Overview pang');
});    
app.get('/product',(req,res)=>{
    res.send('product pang');
});  
app.get('/apl/user',(req,res)=>{
    const userData = {id:15, name: 'Suchada'}
    res.send(userData)
});                     

// ster 3
app.listen(port,'127.0.0.1',()=>{
console.log(`Listen to request on port ${port}`);
});