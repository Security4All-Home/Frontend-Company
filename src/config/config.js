require("dotenv").config();
console.log(process.env.NODE_ENVn, "process.env.NODE_ENV")
export default {
    BASE_URL: process.env.NODE_ENV == "production" ? "https://sec4allapp.herokuapp.com/home" :'http://localhost:8002'
 }