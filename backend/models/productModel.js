import mongoose from 'mongoose';

const productSchema = new mongoose.Schema( // the filled of product
  {
    name: { type: String, required: true, unique: true },
    seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    timestamps: true, // it's optionnal, while mongoose creates a user in db, it adds to 2 filled (createdAt, UpdatedAt)

  }
);
const Product = mongoose.model('Product', productSchema);  // Creates a product for this model

export default Product;