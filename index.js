const express = require("express");
const app = express();
const PORT = 2025;

// express khode ststuse code hara ersal mikonad
// 404 khodcar darad
// content-type ha ra khodash tashkhis midahad
// keili az carhara rahat mikonad

let data = [
  {
    id: 0,
    name: "ehsan",
    lastname: "khan",
  },
  {
    id: 1,
    name: "ehsan",
    lastname: "khan",
  },
  {
    id: 2,
    name: "ehsan",
    lastname: "khan",
  },
  {
    id: 3,
    name: "ehsan",
    lastname: "khan",
  },
];

// useing middlwer
// node bad az har darkhast sari tar amal mikonad
app.use((req , res , next) => {
  const start = Date.now()
  next()
  const end = Date.now() - start
  console.log(`${req.url} , ${req.method} , ${end}`)
})

// in midllwer tamam req hara beh format json tabdil mikonad keh khoob ast
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hi express");
});

app.get('/data', (req , res) => {
    res.send(data)
})

app.post('/data', (req , res) => {
  if(!req.body.name){
    return res.status(400).json({error:"name not add"})
  }
  const newdata = {
    id:data.length,
    name:req.body.name
  }
  data.push(newdata)
  res.json(newdata)
})

app.get('/data/:ID', (req , res) => {
    const id = req.params.ID
    if(data[id])
        res.send(data[id])
    else
        res.sendStatus(404)
})

app.listen(PORT, () => {
  console.log(`
        http://127.0.0.1:${PORT}
        `);
});
