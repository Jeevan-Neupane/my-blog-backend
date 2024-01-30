import mongoose from "mongoose"


const connectToDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGOURI}/${process.env.DBNAME}`);
        console.log("Connection is successfull to the database");
    } catch (error) {

        console.log("Error while connecting to the database ", error);
        process.exit(1);

    }
}

export default connectToDB;