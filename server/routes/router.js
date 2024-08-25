import express from 'express';

import { authenticateSignup, authenticateLogin } from '../controller/userController.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { addPaymentGateway, paymentResponse } from '../controller/payment_controller.js';

const Router = express.Router();

Router.post('/signup', authenticateSignup);

Router.post('/login', authenticateLogin);

Router.get('/products', getProducts);

Router.get('/product/:id', getProductById);

Router.post('/payment', addPaymentGateway);


Router.post('/callback', paymentResponse);

export default Router;