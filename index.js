const express = require("express");
const path = require("node:path")
const app = express();
const PORT = 2025;
const {homerouter , datarouter , imgrouter} = require('./routers');

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
// app.use("/site", express.static("./public/index.html"))
app.use("/site", express.static(path.join(__dirname,"public")))

// dynamic on ham paiini ast
app.set("view engine",'hbs')
app.set("views","views")

app.get("/site", (req , res) => {
  res.render('index',{
    title:"title test",
    caption:"this is a caption"
  })
})

app.use('/',homerouter)
app.use('/data',datarouter)
app.use('/img',imgrouter)

app.listen(PORT, () => {
  console.log(`
        http://127.0.0.1:${PORT}
        `);
});
