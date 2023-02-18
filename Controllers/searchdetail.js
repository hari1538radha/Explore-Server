import { uploadModel } from "../Schema/UploadSchema.js";

export const searchedDetails = (req, res) => {
  const body = req.query;
  const details = uploadModel.findOne({ _id: body.id }, (err, data) => {
    if (err) {
      res.send({
        status: 401,
        message:"error",
        err,
      });
    } else {
      res.send({
        status: 200,
        message:"success",
        data,
      });
    }
  });
};
