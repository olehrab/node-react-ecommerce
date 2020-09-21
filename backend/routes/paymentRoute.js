const express = require('express');
const payment_route = express();

const bodyParser = require('body-parser');
payment_route.use(bodyParser.json());
payment_route.use(bodyParser.urlencoded({ extended:false }));

const path = require('path');

payment_route.set('view engine','ejs');
payment_route.set('views',path.join(__dirname, '../views'));

const paymentController = require('../controller/paymentController');

payment_route.get('/', paymentController.renderBuyPage);
payment_route.post('/pay', paymentController.payProduct);
payment_route.get('/success', paymentController.successPage);
payment_route.get('/cancel', paymentController.cancelPage);
paymentController.payCheck();

module.exports = payment_route;