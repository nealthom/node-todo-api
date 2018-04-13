const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// let data = {
//   id: 10
// };
//
// let token = jwt.sign(data, '123abc');
//
// console.log(token);
//
// let decoded = jwt.verify(token, '123abc');
// console.log('Decoded:', decoded);

let password = '123abc!';

// bcrypt.genSalt(10, (err, salt)=>{
//   bcrypt.hash(password,salt,(err,hash)=>{
//     console.log(hash);
//   })
// });

let hashedPassword = '$2a$10$nwxc/FIEEsGLEE0Tw8EfwOkpyPzaBmk35PB6IX25cHGgxNYWvB8Yi';

bcrypt.compare(password, hashedPassword,(err, res)=>{
  console.log(res);
});
