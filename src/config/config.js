require("dotenv").config()
console.log(rocess.env.production, "rocess.env.production")
export default {
    BASE_URL: process.env.production ? "https://sec4allapp.herokuapp.com/home" :'http://localhost:8002'
 }