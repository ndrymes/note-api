var express = require('express')
var bodyParser =require('body-parser')
var {ObjectID} = require('mongodb')
var mongoose = require('mongoose');
var {Todo,User} =require('./model/models')
var url = process.env.MONGOLAB_URI ||process.env.MONGOHQ_URL || 'mongodb://localhost:27017'
mongoose.connect(url);

var app = express();
app.use(bodyParser.json());
const port =process.env.PORT || 3000

// POST todo to DB
app.post('/todos',(req,res) => {
var newTodo = new Todo({
   text:req.body.text,
   title:req.body.title
 })
 newTodo.save().then((docs) => {
 res.send(docs);
}).catch((e) => {
res.status(400).send(e)
})
})

// POST users in // DB

app.post('/user',(req,res) => {
  var newUser = new User({
    email:req.body.email
  })
  newUser.save().then((result) => {
    res.send(result)
  }).catch((e)=> {
    return res.status(400).send()
  })
})
// Get todos from DB
app.get('/todos/:id',(req,res) => {
  var id=req.params.id
  console.log(id);
  if (!ObjectID.isValid(id)) {
    return res.status(400).send()
  }
  Todo.findById(id).then((todo)=> {
if (!todo) {
   return res.status(404).send()
}
res.send({todo})
}).catch((e) => {
  res.status(400).send()
})
})

app.listen(3000,() => {
  console.log(`server has started at port ${port}`);
})

module.exports = {mongoose}
