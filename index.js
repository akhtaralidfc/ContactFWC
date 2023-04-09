const express = require('express')
var path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'public')));
const port = 2525


app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
})
app.post("/submit",(req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})