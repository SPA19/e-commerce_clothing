import Product from "../models/products.model.js";
import Category from "../models/categories.model.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

export const createProduct = async (req, res) => {
  const { title, description, price, ref, size, color, category } = req.body;

  const categories = await Category.findOne({ name: category });

  if(!categories) return res.status(404).json({message:"category not found"})

  const newProduct = new Product({
    title,
    description,
    price,
    ref,
    size,
    color,
    category:categories._id,
  });
  const productSaved = await newProduct.save();
  res.json(productSaved);
};

export const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = new Category({
    name,
  });
  const categorySaved = await newCategory.save();
  res.json(categorySaved);
};

export const getCategories = async(req,res)=> {
  const categories = await Category.find();
  res.status(200).json(categories);
}

export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "product not found" });
  res.status(200).json(product);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: "product not found" });
  res.status(200).json(product);
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product) return res.status(404).json({ message: "product not found" });
  res.status(200).json(product);
};
