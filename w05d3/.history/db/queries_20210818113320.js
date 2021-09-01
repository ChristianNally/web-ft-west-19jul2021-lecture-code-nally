require('dotenv').config();
const pg = require('pg');

const Client = pg.Client;

const configObject = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
};

const client = new Client(configObject);

client.connect()
.then(()=>{
  console.log('db connected');
})
.catch((err)=>{
  console.log('db connection error:', err.stack);
});


// (rows)=>{  res.render('home',{rowarray: rows});}
const getAllObjectives = (cb) => {
  client.query(`SELECT id,question FROM objectives ORDER BY id;`)
    .then((response)=>{
//      console.log('response.rows:',response.rows);
      cb(response.rows);
    })
    .catch((err)=>{
      console.log('db browse query error:', err.stack);
    });
};

module.exports = {
  getAllObjectives
};