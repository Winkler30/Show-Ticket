import mongoose from "mongoose";

export async function connect(){
    try{
      await mongoose.connect("mongodb+srv://show:show@cluster0.yizljgx.mongodb.net/show-ticket");
      console.log("Database connected!");
    } catch(error) {
        console.log("~ file: database.ts:5 ~ connect ~ error:", error);
    }
}