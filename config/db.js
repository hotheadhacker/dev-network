const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// mongoose.connect(db);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    //   Exit on err
    process.exit(1);
  }
};

module.exports = connectDB;
