const express = require("express");
const app = express();
const db = require("./db");
const axios = require("axios")

const PORT = 4000;
app.use(express.json());

app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:8080","http://localhost:2223","http://localhost:2223/#/signup","http://localhost:2223/#/login"
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/", (req, res) => {
  res.json({ info: "Its Login Time BABYYYYYY" });
});



app.get("/login/:username/:password", db.login)
app.post("/signup/:username/:password", db.signup)
app.put("/change/:username/:password/:newpassword", db.changePassword)


// this one 
// hit the url /home/:username/:newTokens in the front end -> Button called Add tokens -> with the same open AI
// define "get" in front end
// EDIT
app.get("/home/:username/:newTokens", db.changeTokens)

app.put("/changeLogin/:username/:password", db.changeCurrentLogin)
app.get("/getLogin", db.getCurrentLogin)

// ------ FILL IN BELOW -------
// Write endpoints that allow a client to:

//-----------------------------
//#region Server
//-----------------------------
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  axios.get("http://localhost:4000/#/login/aidan_shah@horacemann.org/P").then((response) =>{
    console.log(response.data);
  });
});
//#endregion Server