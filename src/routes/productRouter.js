const express = require('express');

const productRouter = express.Router();

productRouter.route('/')
  .get((req, res) => {
    res.render(
      'product',
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
module.exports = productRouter;
