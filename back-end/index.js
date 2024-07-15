const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();


const special = require('./routes/special.js');
const articles = require('./routes/articles.js');
const users = require('./routes/users.js');

app.use(special.routes());
app.use(articles.routes());
app.use(users.routes());
app.use(cors());

let port = process.env.PORT || 3030;

app.listen(port);
