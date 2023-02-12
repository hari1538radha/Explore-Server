import { uploadModel } from "../Schema/UploadSchema.js";

export const searchData = (req, res) => {
    const ele = req.query;
    const filteredTag = uploadModel.find({ $or: [{ placeTag: ele.placeTag }, { placeName: ele.placeName }] }, (err, data) => {
        if (err) {
            return res.send(err);
        }
        else {
            if (data.length) {

                return res.send(data);
            }
            else {
                return res.status(400).send("please enter correct tag or place")
            }
        }
    })
}
