import mongoose from "mongoose";
import CarSchema from "../models/Car";
import ValueSchema from "../models/Value";


// this is where models get registered and access from the db
class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema);
}

export const dbContext = new DbContext();
