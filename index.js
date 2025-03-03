const express = require("express");
const app = express();
const PORT = 2025;
const {
  homepage,
  getData,
  getIdData,
  postData,
  putIdData,
  deleteIdData,
} = require("./controllers");

// useing middlwer
// node bad az har darkhast sari tar amal mikonad
// in midllwer tamam req hara beh format json tabdil mikonad keh khoob ast
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const end = Date.now() - start;
  console.log(`${req.url} , ${req.method} , ${end}`);
})
app.use(express.json())

// express khode ststuse code hara ersal mikonad
// 404 khodcar darad
// content-type ha ra khodash tashkhis midahad
// keili az carhara rahat mikonad
app.get("/", homepage);

app.get("/data" , getData);

app.get("/data/:ID" , getIdData);

app.post("/data" , postData);

app.put("/data/:ID" , putIdData);

app.delete("/data/:ID" , deleteIdData);

app.listen(PORT, () => {
  console.log(`
        http://127.0.0.1:${PORT}
        `);
});
