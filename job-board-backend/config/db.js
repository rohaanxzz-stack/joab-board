const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      family: 4, // Force IPv4
    });

    console.log("==================================");
    console.log(" MongoDB Connected Successfully");
    console.log(" Host:", conn.connection.host);
    console.log(" Database:", conn.connection.name);
    console.log("==================================");
  } catch (error) {
    console.log("==================================");
    console.error(" Database Connection Failed");
    console.error(error);
    console.log("==================================");
    process.exit(1);
  }
};

module.exports = connectDB;