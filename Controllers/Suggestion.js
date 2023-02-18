import { uploadModel } from "../Schema/UploadSchema.js";

export const searchSuggestion = (req, res) => {
  const body = req.query;
  const detail = uploadModel.find({ placeTag: { $regex: `.*\\#${body.placeTag}.*`, $options: 'i'}}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ status: 200, data });
    }
  });
};
