import mongoose from "mongoose";
const ProfileDataSchema = new mongoose.Schema({
  fullName: { type: String },
  username: { type: String },
  bio: { type: String },
  profilePicUrl: { type: String },
  followingCount: { type: Number },
  followerCount: { type: Number },
  companyName: { type: String },
  location: { type: String },
  portfolioUrl: { type: String },
});
const ProfileData = mongoose.model("ProfileData", ProfileDataSchema);
export { ProfileData };
