
import { uploadModel } from "../Schema/UploadSchema.js";

export const uploadData = (req, res) => {
  console.log(req.body);
  upload(req, res, (err) => {
    if (err) {
      // res.send("there is an when uploading data");
      console.log(err);
    } else {
      // const addImage = new uploadModel(req.body);
      const addImage = new uploadModel({
        placeName: req.body.placeName,
        placeTag: req.body.placeTag,
        placeDescription: req.body.placeDescription,
        placeImage: req.body.placeImage,
        cardId : Math.floor(1000 + Math.random() * 9000)
      });
      addImage.save((err, data) => {
        if (err) {
          res.send(err);
        }
        res.status(200).send({
          message: "Posted sucessfully!!!",
        });
      });
    }
  });
};
