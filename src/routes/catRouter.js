const express = require('express');

const catRouter = express.Router();

catRouter.route('/')
  .get((req, res) => {
    res.render(
      'categories',
      {
        title: 'ZEEBTAL COLLECTION',
        contact: 'contact',
        checkout: 'checkout',
        categories: 'categories',
        product: 'product',
        cart: 'cart',
        index: 'index'
      }
    );
  });

module.exports = catRouter;
