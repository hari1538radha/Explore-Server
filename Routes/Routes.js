import express from "express";
import { signup } from "../Controllers/Signup.js";
import { login } from "../Controllers/Login.js";
import { uploadData } from "../Controllers/Upload.js";
import { home } from "../Controllers/Home.js";
import { searchData } from "../Controllers/Search.js";
import { searchedDetails } from "../Controllers/searchdetail.js";
import { searchSuggestion } from "../Controllers/Suggestion.js";
const Route = express.Router();

Route.post("/signup", signup);
Route.post("/login", login);
Route.post("/upload", uploadData);
Route.get("/search", searchData);
Route.get("/home", home);
Route.get("/details",searchedDetails)
Route.get("/suggestion",searchSuggestion)

export default Route;
