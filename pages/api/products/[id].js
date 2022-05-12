import dbConnect from "../../../util/mongo";
import Product from "../../../Models/Product"; 


export default async function handler(req, res) {
    const {
        method,
        query:{ id }
    } = req
    dbConnect()
    if(method === 'GET'){
      try {
        const data = await Product.findById(id)
        res.status(200).json(data)
      } catch (error) {
        res.status(500).json(error)
      }
    }
    else if (method === 'DELETE') {
        try {
            const products = await Product.create(req.body);
            res.status(201).json(products);
          } catch(error){
            res.status(501).json(error);
        }
    } 
  }
