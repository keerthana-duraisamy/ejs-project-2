const express = require('express')
const app = express()
const port = 3000

app.get('/:name/:msg', (req, res) => {
    let name=req.params.name;
    let msg=req.params.msg;

  res.render('happy.ejs',{name:name,msg:msg});
})
app.get('/', (req, res) => {
  
  res.render('admin.ejs');
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})