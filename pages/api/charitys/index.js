import dbConnect from "../../../util/mongo";
import Charity from "../../../models/Charity";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const charitys = await Charity.find();
      res.status(200).json(charitys);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const charity = await Charity.create(req.body);
      res.status(201).json(charity);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
