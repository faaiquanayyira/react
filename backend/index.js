//import
const express = require("express") 
require("./connection")
var studentModel=require("./model/student")

//initialize
const app = express()

//midd
app.use(express.json())

//api creation
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/sample', (req, res) => {  //path is /sample
  res.send('trial api')
})

app.post('/add', (req, res) => {  //path is /add
  studentModel(req.body).save()
  res.send("data added")
})

app.get('/view', async (req, res) => {
  const data = await studentModel.find(); // get all records
  res.send(data);
  
});


//port setting
app.listen(3004, () => {
  console.log('Server is running on http://localhost:3004')
})