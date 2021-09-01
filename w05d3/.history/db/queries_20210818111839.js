const pg = require('pg');

const Client = pg.Client;

const configObject = {
  user: 'postgres',
  host: 'localhost',
  database: 'spot',
  password: 'postgres',
  port: '5433'
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
      console.log('response.rows:',response.rows);
      cb(response.rows);
    })
    .catch((err)=>{
      console.log('db browse query error:', err.stack);
    });
};

module.exports = {
  getAllObjectives
};