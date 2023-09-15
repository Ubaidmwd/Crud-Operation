const app = require("./app");

const dotenv = require("dotenv");
const dbconnection = require("./config/database");

////////// Uncaught ////////
process.on("uncaughtException",(err)=>{
  console.log(`Error: ${err.message}`)
  console.log("The server is shutting down due to the uncaughtException Error")
  process.exit(1)

})


dotenv.config({ path: "backend/config/config.env" });

///////Database////////
dbconnection();

const server=app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost ${process.env.PORT}`);
});

///// Unhandle Promis Rejection////////
process.on("unhandledRejection",(err)=>{
  console.log(`Error: ${err.message}`)
  console.log("The server is shutting down due to the Unhandle promise rejection")
  server.close(()=>{
    process.exit(1)
  })
})
