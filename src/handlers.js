import { readFileSync } from "node:fs"
import { config } from 'dotenv'

config();

/* .env file contains the following:
   
   HOST_NAME=<HOST_NAME_HERE>
   PORT=<PORT_NUMBER_HERE>
   DATABASE=<DATABASE_NAME_HERE>
   USER=<USER_NAME_HERE>
   PASSWORD=<PASSWORD_HERE>

*/
function getDbConnectionDetails() {
   return {
      host: process.env.HOST_NAME,
      port: process.env.PORT,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD
   }
}

export { getDbConnectionDetails }