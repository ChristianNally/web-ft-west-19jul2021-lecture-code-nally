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
