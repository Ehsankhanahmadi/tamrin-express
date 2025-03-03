const express = require("express");
const app = express();
const PORT = 2025;
const {homerouter , datarouter , imgrouter} = require('./routers')

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

app.use('/',homerouter)
app.use('/data',datarouter)
app.use('/img',imgrouter)

app.listen(PORT, () => {
  console.log(`
        http://127.0.0.1:${PORT}
        `);
});
