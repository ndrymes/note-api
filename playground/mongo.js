const MongoClient = require('mongodb').MongoClient
const assert =require('assert')

// MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,client) =>{
//   if (err) {
//     return console.log('There was an error');
//   }
//   console.log('Succesful connection');
//   const db=client.db('TodoApp')
//   db.collection('Todo',).insertOne({
//     title:'Lesson learnt',
//     body:'Thank God for lesson learnt'
//   },(err,result) => {
//     if (err) {
//       console.log('we have this particular error',err);
//     }
//     console.log('sucessful retreiving of data');
//   console.log(JSON.stringify(result.ops,undefined,2));
//   } )
//   db.collection('Users').insertOne({
//     name:'Sunmonu Oluwole',
//     age:27,
//     location:'Akure'
//   },(err,result) => {
//     if (err) {
//       console.log('couldnt insert the data in the database');
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
//   })
//   client.close()

// })
const dbName='TODOAP'
const url='mongodb://localhost:27017'

const client=new MongoClient(url)
client.connect((err) => {
  assert.equal(null,err)
  console.log('Succesful connection');
  const db=client.db(dbName)
  db.collection(dbName).insertOne({
    name:'Sunmonu Oluwole',
    age:27,
    locaation:'Akure'
  },(err) => {
    assert.equal(null,err)
    console.log('data installed');
    client.close()
  })

})
