import mongoose from "mongoose";

//mongodb+srv://abdulhananabbasi50:POBcLSr0udxd0Wjh@cluster0.mrm7pfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


//mongodb+srv://abdulhananabbasi50:<password>@cluster0.mrm7pfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const connection = async () => {

const URL = "mongodb+srv://abdulhananabbasi50:POBcLSr0udxd0Wjh@cluster0.mrm7pfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

try {

    await mongoose.connect(URL, {useNewUrlParser: "true"});
    console.log("database connection established successfully");

} catch (error) {

    console.log("Error Occur", error);

}
}


export default connection