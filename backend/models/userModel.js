import mongoose from 'mongoose'; 

const userSchema = new mongoose.Schema(  // the filled of user
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true, // it's optionnal, while mongoose creates a user in db, it adds to 2 filled (createdAt, UpdatedAt)
  }
);
const User = mongoose.model('User', userSchema); // Creates a user for this model
export default User;