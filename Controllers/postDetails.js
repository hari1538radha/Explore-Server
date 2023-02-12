import { uploadModel } from "../Schema/UploadSchema.js";
import { searchData } from "./Search.js";

 export const postData = (req,res)=>{
    const details=req.query.id;
    const postDetails= uploadModel.find({suggestions : { $all: [
     { $eleMatch: { placeTag: details.placeTag } }, 
     { $eleMatch: { placeName:details.placeName} } 
    ] 
}
 });

searchData.suggestions[
    {
       placeTag:"#ooty",
       placeName:"ooty"
    },
    {
        placeTag:"GMX",
        placeName:"CBE"
    },
    {
        placeTag:"fun-mall",
        placeName:"CBE"
    }
]
 }