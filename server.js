const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { result } = require('./result.json')

const app = express();

app.use(bodyParser.json());

app.use(cors());


console.log(result) 

app.get('/transation', async (req, res) => {
  try {
      console.log(resultJson)
  } catch (error) {
      res.status(500).send(new Error(error))
  }
});

app.get('/', async (res) => {
  res.send("T&B token API connected!")
})

// starting the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${process.env.PORT == undefined ? "3000" : process.env.PORT}`);
});
