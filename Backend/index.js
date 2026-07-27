import dotenv from "dotenv"; 
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicantionRoute from "./routes/application.route.js";


dotenv.config(); 

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());
const corsOptions = {
    origin:[
    'http://localhost:5173',
     'https://job-portal-lake-nu.vercel.app/'
    ],
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

//apis
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/applicantion",applicantionRoute);


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})