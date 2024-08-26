import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "pinterest",
        })
        console.log("Mongodb Connected")
    }catch(error){
        console.log(error)
    }
}

export default connectDB; 