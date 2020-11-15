const mongoose = require("mongoose");
const db ="mongodb+srv://kunalbatra:Thorisgr8@contactkeeper.zdkpz.mongodb.net/test?retryWrites=true&w=majority";

const connectdb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectdb;
