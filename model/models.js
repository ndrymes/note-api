var mongoose=require('mongoose')
var Todo =mongoose.model('Todo',{
  text:{
    required:true,
    minLength:1,
    type:String,
    trim:true
  },
  title:{
    required:true,
    minLength:1,
    trim:true,
    type:String
  }
})
var User= mongoose.model('User',{
  email:{
    type:String,
    trim:true,
    required:true,
    minLength:1
  }
})
module.exports ={Todo,User}
