const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
app.post('/register',(req,res)=>{
res.json('test ok')
});

app.listen(4000,()=>{
    console.log('serverr running on port 4000')
})
console.log('hi')
