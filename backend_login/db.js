const path = require("path");
const sqlite = require("sqlite3").verbose();
const dbFile = path.join(__dirname, "hotdog.db");
const db = new sqlite.Database(dbFile, (error) => {
  if (error) return console.error(error.message);
  console.log(`Connected to database ${dbFile}`);
});

const login = (request, response) => {
    // Parse the id to generate a SQLite query
    const username = request.params.username;
    const password = request.params.password;
    const query = `SELECT * FROM hotdog WHERE email = ? `;
    db.get(query, [username], (error, result) => {
      if (error) {
        console.error(error.message);
        response.status(400).json({ error: error.message });
        return;
      }
      // If nothing is returned, then result will be undefined
      if (result) {
        if(result['password']== password){
          console.log(result['password'])
            passwordcheck = true
            response.send(passwordcheck)
        }
        else{
            passwordcheck = false
            response.send(passwordcheck)
        }
      }
      else {
        test = {"login":"failed"}
        response.send(test)
      }
    });
  };

  const signup = (request, response) => {
    // Parse the id to generate a SQLite query
    const username = request.params.username;
    const password = request.params.password;
    const query1 = `SELECT * FROM hotdog WHERE email = ?`;
    const query2 = `INSERT INTO hotdog (email,password) VALUES (?,?)`;
    db.get(query1, [username], (error, result) => {
      if (error) {
        console.error(error.message);
        response.status(400).json({ error: error.message });
        return;
      }
      // If nothing is returned, then result will be undefined
      if (result) {
        passwordchange = {"Current member":true}
        response.send(passwordchange)
      } else {
        db.get(query2, [username,password], (error, result) => {
          if (error) {
            console.error(error.message);
            response.status(400).json({ error: error.message });
            return;
          }
          // If nothing is returned, then result will be undefined
          passwordchange = {"successful_signup":true, "username":username, "password":password}
          response.send(passwordchange)
        });

      }
    });
  };


  const changePassword = (request, response) => {
    // Parse the id to generate a SQLite query
    const username = request.params.username;
    const password = request.params.password;
    const newpassword = request.params.newpassword;
    const query = `UPDATE hotdog SET password = ? WHERE email = ? and password = ?`;
    db.get(query, [newpassword, username, password], (error, result) => {
      if (error) {
        console.error(error.message);
        response.status(400).json({ error: error.message });
        return;
      }
      // If nothing is returned, then result will be undefined
        passwordchange = {"successful_change":true}
        response.send(passwordchange)
    });
  };

  const changeTokens = (request, response) => {
    const username = request.params.username;
    const newTokens = request.params.newTokens;
    const query = 'Update hotdog SET tokens = ? WHERE email = ?'
    db.get(query, [newTokens, username], (error, result) =>{
      if (error){
        console.error(error.message);
        response.status(400).json({ error: error.message });
        return;
      }
    });
  };

  const changeCurrentLogin = (request, response) => {
    const username = request.params.username
    const password = request.params.password
    const query = "UPDATE CurrentLogin SET email = ?, password = ?"
    db.get(query, [username, password], (error, result) => {
      if (error){
        console.error(error.message);
        response.status(400).json({error: error.message});
        return;
      }
    })
  }

  const getCurrentLogin = (request, response) => {
    const query = "SELECT * FROM CurrentLogin"
    db.get(query, (error, result) => {
      if (error){
        console.error(error.message);
        response.status(400).json({error: error.message});
        return;
      }
      else if (result){
        console.log(result)
        response.send(result);
      }
    })
  }  

  module.exports = {
    login,
    changePassword,
    signup,
    changeTokens,
    changeCurrentLogin,
    getCurrentLogin
  };