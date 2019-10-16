const express = require('express');

const server =  express();
server.use(express.json());
// CRUD = Create, Read, Update, Delete

// Query params = ?teste=1
/*server.get('/teste', (req, res ) =>{
  const nome = req.query.nome;
  return res.json({ message: `Hello ${nome}`});
});*/

// Route params = /users/1
/*server.get('/users/:id', (req, res ) =>{
  //const id = req.params.id;
  const {id} = req.params;
  return res.json({ message: `Buscando o usuário ${id}`});
});*/

const users = ["Kelly", "Bruno", "Victor"];

//MiddleWares Global
server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  next();
  console.timeEnd('Request');
});

//MiddleWares Local
function checkUserExists(req, res, next){
  if (!req.body.name){
    return res.status(400).json({error:"User name is required"});
    }
  return next();  
}

function checkUserInarray(req, res,next) {
  const user = users[req.params.index];
  if (!user){
    return res.status(400).json({error: 'User does not exists'});
  }
  req.user = user;

  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', checkUserInarray, (req, res ) =>{
  //const {index} = req.params;
  return res.json(req.user);
});

// Request body = {"name": "Bruno", "emaol": "mendesvalentim2gmail.com" }
server.post('/users', checkUserExists, (req, res) =>{
  const {name} = req.body;
  users.push(name);
  return res.json(users);
})

server.put('/users/:index', checkUserExists, checkUserInarray, (req, res) => {
  const {index} = req.params;
  const {name}  = req.body;
  
  users[index] = name;
  return res.json(users);
});

server.delete('/users/:index', checkUserInarray, (req, res) =>{
  const {index} = req.params;
  users.splice(index, 1);
  return res.send();
})
server.listen(3000);