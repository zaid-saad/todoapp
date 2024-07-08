import mongoose from "mongoose"

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/Todo-app');
    console.log("DB Connected");
}
