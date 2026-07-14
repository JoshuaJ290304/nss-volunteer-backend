const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const VolunteerRoutes=require("./routes/VolunteerRoutes");

const app=express();

app.use(express.json());

app.use(cors());

mongoose.connect("mongodb://Joshua:qwerty123456@ac-sfucm5l-shard-00-00.adz9f2y.mongodb.net:27017,ac-sfucm5l-shard-00-01.adz9f2y.mongodb.net:27017,ac-sfucm5l-shard-00-02.adz9f2y.mongodb.net:27017/nssdb?ssl=true&replicaSet=atlas-tq7irz-shard-0&authSource=admin&appName=Cluster0")

.then(()=>{

    console.log("MongoDB Connected");

})

.catch((err)=>{

    console.log(err);

});

app.use("/",VolunteerRoutes);

app.listen(3000,()=>{

    console.log("Server Started");

});