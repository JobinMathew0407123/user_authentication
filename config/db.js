import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://jobinmathew0407:mm86iqIxtpuTEStf@cluster0.xuhguhe.mongodb.net/`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log("Connection failed!");
        process.exit(1);
    }
};

export default connectDatabase;
