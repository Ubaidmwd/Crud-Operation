const app = require("./app");

const dotenv = require("dotenv");
const dbconnection = require("./config/database");

dotenv.config({ path: "backend/config/config.env" });
dbconnection();
app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost ${process.env.PORT}`);
});
