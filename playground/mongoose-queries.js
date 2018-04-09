const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5acae61d381490b569165b5411';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos find',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo findOne',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id',todo);
// }).catch((e) => console.log(e));

User.findById('5ac93a73fafe9ff12b2ef489').then((user)=>{
  if(!user){
    return console.log('User not found');
  }

  console.log('User by id', user);

}).catch((e)=> console.log(e));
