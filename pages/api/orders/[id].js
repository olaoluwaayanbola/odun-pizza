import dbConnect from "../../../util/mongo";
import Product from "../../../Models/Product"; 

export default async function handler(req, res) {
    const {method} = req
    dbConnect()
    if(method === 'GET'){

    }
    if (method === 'POST') {

    } 
  }

  