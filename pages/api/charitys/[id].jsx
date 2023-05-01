import dbConnect from "../../../util/mongo";
import Charity from "../../../models/Charity";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const charitys = await Charity.findById(id);
      res.status(200).json(charitys);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const charity = req.body.charity;
      await charity.replaceOne(id, charity);
      res.send("Updated");
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
    try {
      await Charity.findByIdAndDelete(id);
      res.status(200).json("The charity has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
