const express = require("express");
const app=express();
const mysql = require("mysql");

const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "password",
    database: "the_sneakers_society_mysql_database",
});

app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO the_sneakers_society (ColumnName, Comments) VALUES ('columnname', 'comments');";
    db.query(sqlInsert, (err, result)=> {
    res.send("The-Sneakers-Society-Web-Application");
});
});

app.listen(3001, ()=> {
    console.log("The application is running.");
});
