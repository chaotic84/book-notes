import { readFileSync } from "node:fs"

/* dcCredentials.json contents:
   {
      "user": "<user_name_here>",
      "password": "<password_here>"
   }
*/
function getDbCredentials() {
   return JSON.parse(readFileSync("./dbCredentials.json", "utf-8"));
}

export { getDbCredentials }