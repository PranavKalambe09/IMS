const { default: mongoose } = require("mongoose");
const { PUBLIC_DATA } = require("../../constant");

exports.ConnectDB = async () => {
  try {
    await mongoose.connect(PUBLIC_DATA.mongo_uri);
    console.log(`App is connected with ${mongoose.connection.host}`);
  } catch (error) {
    mongoose.disconnect();
    process.exit(1);

  }
}