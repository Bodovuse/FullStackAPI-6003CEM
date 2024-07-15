const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser= require('koa-bodyparser');
const app = new Koa();

app.use(cors()).use(bodyParser());


const special = require('./routes/special.js')
const articles = require('./routes/articles.js');
const users = require('./routes/users.js');
const categories = require('./routes/categories.js');
const comments = require('./routes/comments.js');
const uploads = require('./routes/uploads.js');

app.use(special.routes());
app.use(articles.routes());
app.use(users.routes());
app.use(categories.routes());
app.use(comments.routes());
app.use(uploads.routes());

module.exports = app;
