let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cv",
});

con.connect(function (err) {
  if (err) {
    console.error("error connecting to database ", err);
  } else {
    console.log("connected");
  }
});
