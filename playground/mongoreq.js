const {MongoClient,ObjectID}= require('mongodb')
const assert =require('assert')


const dbName='TodoApp'
const url='mongodb://localhost:27017'
MongoClient.connect(url,(err,client) => {
  assert.equal(null,err)
  console.log('Succesful connection');
   const db=client.db(dbName)
  // db.collection(dbName).insertOne({
  //   name:'Sunmonu Oluwole',
  //   age:27,
  //   locaation:'Akure'
  // },(err) => {
  //   assert.equal(null,err)
  //   console.log('data installed');
  db.collection("Todo").find({title:'Lesson learnt'}).toArray().then((docs)=> {
    console.log(docs);
    console.log(JSON.stringify(docs,undefined, 2));
  },(err) => {
    console.log("we encountered the error",err);
  })
    // client.close()
  })
