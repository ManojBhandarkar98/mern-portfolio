import mongoose from "mongoose";

const dbConnection = () => {
  mongoose.connect(process.env.Mongo_URI, { 
    dbName: "Portfolio" 
}).then( () => {
    console.log("Connected to DB");
}).catch((error)=>{
    console.log(`Failed to connect DB: ${error}`);
})
};

export default dbConnection;