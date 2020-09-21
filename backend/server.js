//initializes
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

//app
const app = express();

//port
const port = process.env.PORT || 6400;
console.log("Localhost connected on port",port)

//routes
const productRoute = require('./routes/product');
const homeRoute = require('./routes/home');
const cartRoute = require('./routes/cart');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const paymentRoute = require('./routes/paymentRoute');
const printfulRoute = require('./routes/printfulRoute');

//middleware
app.use(cors({ origin: `http://localhost:5173`, credentials: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.disable('view cache');

app.use('/', homeRoute);
app.use('/products', productRoute);
app.use('/carts', cartRoute);
app.use('/auth', userRoute);
app.use('/auth', authRoute);
app.use('/payment',paymentRoute)
app.use('/printful', printfulRoute);

//mongoose
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose
	.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
	.then(() => {
		app.listen(port, () => {
			console.log('connect');
		});
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = app;
