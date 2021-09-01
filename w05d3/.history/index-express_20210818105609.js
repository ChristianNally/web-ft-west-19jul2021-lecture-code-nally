// Express Version
const express = require('express');
const app = express();
app.set('view engine','ejs');


app.get('/',(req,res)=>{

});


const port = process.env.PORT || 7887;
app.listen(port,()=>{
  console.log(`Server is listening on port=${port}`);
});