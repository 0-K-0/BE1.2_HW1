import fs from "fs";
import dotenv from "dotenv";
import { ProfileData } from "./profile.model.js";

import mongoose from "mongoose";

const Data_User = fs.readFileSync("data.json", "utf8");
const Data_json = JSON.parse(Data_User);
dotenv.config();
const start = async () => {
  try {
    console.log("connecting to db...");
    await mongoose.connect(process.env.DB_access);
    console.log("db connection established");
    console.log("clearing the data");
    await ProfileData.deleteMany({});
    console.log("data cleared");
    console.log("seeding data");
    await ProfileData.insertMany(Data_json);
    console.log("data seeded successfully");
  } catch (err) {
    console.error("error", err);
  } finally {
    mongoose.connection.close();
  console.log("connection closed");
  }
};
start();
