import Order from "../../../models/Order";
import dbConnect from "../../../util/mongo";

// export default async function handler(req, res) {
//     const {method} = req
//     dbConnect()
//     if(method === 'GET'){
//         try {
//             const data = await Product.find()
//             res.status(201).json(data)
//         } catch (error) {
//             res.status(500).json(error)
//         }
//     }
//     if (method === 'POST') {
//         try {
//             const data = await Order.create(req.body)
//             res.status(201).json(data)
//         } catch (error) {
//             res.status(500).json(error)
//         }
//     } 
//   }

const handler = async (req, res) => {
    const { method } = req;
  
    await dbConnect();
  
    if (method === "GET") {
      try {
        const orders = await Order.find();
        res.status(200).json(orders);
      } catch (err) {
        res.status(500).json(err);
      }
    }
    if (method === "POST") {
      try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  };
  
  export default handler;