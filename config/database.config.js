
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const dbConnect = async (mongoURI) => {
    console.log(`\n MongoDB : {mongoURI}`,mongoURI);
    try {
        
        const connectionInstance = await mongoose.connect(mongoURI)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}
module.exports = dbConnect;