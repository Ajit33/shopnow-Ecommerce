const mongoose = require("mongoose");

const ConnectDatabase = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URL);
  try {
    if (connection) {
      console.log("databese Connected sucessfully");
    } else {
      console.log("somthing went wrong");
    }
  } catch (error) {
    console.log(`db connection failed ` + error);
  }
};


module.exports=ConnectDatabase