import dbConnect from "../../../util/mongo";
import Product from "../../../Models/Product"; 

export default async function handler(req, res) {
    dbConnect()
    const {method} = req
    if (method === 'POST') {
        try {
            const product = await Product.create(req.body);
            console.log(req.body)
            res.status(201).json(product);
          } catch(err){
            res.status(500).json(err);
        }
    } 
  }
  