import mongoose from "mongoose";

const Category = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const CategorySchema = mongoose.model('Category', Category);

export default CategorySchema;