import express from "express"
import bodyParser from "body-parser"
import pg from "pg"
import { getDbCredentials } from "./src/handlers.js"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
   res.render("index.ejs", { heading: "Hello from the server!" })
})

app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});