import { dbConnection } from "./connections.js";
import { app } from "./index.js";
const port=process.env.port;
const hostname="127.0.0.1";

dbConnection();

app.listen(port,()=>
{
  console.log(`server started at http://${hostname}:${port}`);
})