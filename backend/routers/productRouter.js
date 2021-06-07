import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();
 
//List product's API
productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => { //express.Router() : fct: makes our code moduler, instead of having all routers in server.js ..We can define multiple files to have our routers

    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products); //Insert obj in an Array in the product collection
    res.send({ createdProducts });
  })
);
//Details product's API
productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => { //async : cuz the nature of monogoose options is async 
    //expressAsyncHandler : to get a msg error
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

export default productRouter;