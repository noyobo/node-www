const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000, () => {
    console.log('App started at http://127.0.0.1:3000')
});