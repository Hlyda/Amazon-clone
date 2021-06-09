import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';

dotenv.config();

const app = express();
app.use(express.json()); // Middleware that parses Json data in the body of req 
app.use(express.urlencoded({ extended: true }));

//Connecting to mongodb
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/buildaz', {
  useNewUrlParser: true, // Get ride of the duplicated warning 
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.get('/', (req, res) => {
  res.send('Server is ready');
});
// This middleware is an error catcher
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});