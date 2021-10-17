const mongoose = require("mongoose");
dbConnect();
async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://root:toor@cluster0.cguhf.mongodb.net/mern-pizza",
      { useNewUrlParser: true }
    );
    console.log("Mongo DB Connection success✅");
  } catch (error) {
    console.log("Mongo DB Connection failed");
  }
}

module.exports = mongoose;
