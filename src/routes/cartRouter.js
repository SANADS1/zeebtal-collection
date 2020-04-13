const express = require('express');

const cartRouter = express.Router();

cartRouter.route('/')
  .get((req, res) => {
    res.render(
      'cart',
      {
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
module.exports = cartRouter;
