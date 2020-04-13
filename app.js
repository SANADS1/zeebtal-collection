const express = require('express');
const chalk = require('chalk');

const app = express();
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 4000;
const catRouter = require('./src/routes/catRouter');
const contactsRouter = require('./src/routes/contactsRouter');
const checkoutRouter = require('./src/routes/checkoutRouter');
const productRouter = require('./src/routes/productRouter');
const cartRouter = require('./src/routes/cartRouter');

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/categories', catRouter);
app.use('/contact', contactsRouter);
app.use('/checkout', checkoutRouter);
app.use('/product', productRouter);
app.use('/cart', cartRouter);

app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav: [{ link: '/categories', title: 'Categories' },
        { link: '/accessories', title: 'Accessories' },
        { link: '/offers', title: 'Offers' },
        { link: '/contact', title: 'Contacts' }],
      title: 'ZEEBTAL COLLECTION',
      checkout: 'checkout',
      categories: 'categories',
      product: 'product',
      contact: 'contact',
      cart: 'cart',
      index: 'index'
    }
  );
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
