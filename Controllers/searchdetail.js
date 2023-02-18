import { uploadModel } from "../Schema/UploadSchema.js";

export const searchedDetails = (req, res) => {
  const body = req.query;
  const details = uploadModel.findOne({ id: body.id }, (err, data) => {
    if (err) {
      res.send({
        status: 400,
        err,
      });
    } else {
      res.send({
        status: 200,

        data,
      });
    }
  });
};
