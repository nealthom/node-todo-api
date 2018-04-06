// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').find({
//   _id: new ObjectID('5ac686b1fc58100efb24092e')
// }).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('Unable to fetch todos',err);
// });
db.collection('Todos').find().count().then((count)=>{
  console.log(`Todos count: ${count}`);
},(err)=>{
  console.log('Unable to fetch todos',err);
});

db.collection('Users').find({name:'Thomas'}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Unable to connect to users');
});

  // db.close();
});
