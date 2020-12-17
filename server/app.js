const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3001

let lastLogId = 3;
const logs = [
  {
    id: 1,
    text: 'one',
    seconds: 1
  },
  {
    id: 2,
    text: 'two',
    seconds: 2
  },
  {
    id: 3,
    text: 'one',
    seconds: 3
  },
];

app.use(cors());

/** REST */
// resource /logs
// get list
// GET /logs
app.get('/logs', (req, res) => {
  res.json({
    count: logs.length,
    items: logs
  })
})

// get 1 item
// GET /logs/:id
app.get('/logs/:id', (req, res) => {
    const id = req.params.id;
    const item = logs.filter(item => item.id == id);
    // logs.length = 0;
    res.json({
        item: item
    })
});

// add 1 item
// POST /logs + body
app.post('/logs', (req, res) => {
  const { text, seconds } = req.body;
  const log = {
    id: lastLogId += 1,
    text,
    seconds
  };
  logs.push(log)
  res.json({
    item: log
  })
})

// update 1 item
// PUT /logs/:id + body

// delete 1 item
// DELTE /logs/:id

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})