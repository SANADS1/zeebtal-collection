const express = require('express');

const contactsRouter = express.Router();
contactsRouter.route('/')
  .get((req, res) => {
    res.render(
      'contact',
      {
        title: 'ZEEBTAL COLLECTION',
        categories: 'categories',
        checkout: 'checkout',
        product: 'product',
        contact: 'contact',
        cart: 'cart',
        index: 'index'
      }
    );
  });
module.exports = contactsRouter;
