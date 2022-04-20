import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);
// {
//   "title":"yr",
//   "desc":"prices",
//   "img":"/Img/pizza.png",
//   "prices":[12,13,14],
//   "extraOptions":[{
//       "text":"spicy sauce",
//       "price":2
//   }]
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
