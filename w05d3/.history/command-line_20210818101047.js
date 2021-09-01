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

const verb = process.argv[2];

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM objectives ORDER BY id;')
    .then((response)=>{
      console.log('response.rows:',response.rows);
      client.end();
    })
    .catch((err)=>{
      console.log('db browse query error:', err.stack);
    });
    break;
  default:
    console.log('please enter a recognized verb: browse, read, ...');
    client.end();
}
