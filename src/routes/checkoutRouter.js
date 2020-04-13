const express = require('express');

const checkoutRouter = express.Router();

checkoutRouter.route('/')
  .get((req, res) => {
    res.render(
      'checkout',
      {
        title: 'ZEEBTAL COLLECTION',
        contact: 'contact',
        categories: 'categories',
        checkout: 'checkout',
        product: 'product',
        cart: 'cart',
        index: 'index'
      },

    );
  });
module.exports = checkoutRouter;
