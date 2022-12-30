//Imports express to use in the project
const express = require("express");

//executes express for the project
const app = express();

//path file built in with NODE, lets you set file/dir paths
const path = require("path");

//tells the app to use extended javascript
//need to install with npm, and then express will require it so you dont have to
//!!!the default folder ejs will look for pages to load is ***/views***
app.set("view engine", "ejs");

//if opening script.js from another outside location, this forces the app to look in
//the correct directory ***/views*** relative to the script.js file to load the pages
//requires the ***const path = require("path")*** thing from above ^^^
app.set("views", path.join(__dirname, "/views"));

//tells express that you want to serve the app all of the assets (css js) in the public folder
//also does the thing from above, tells it to use the public folder relative to the script.js, if opened from outside
app.use(express.static(path.join(__dirname, "public")));

//sets the route/home of this project to this file with a request and responce
app.get("/", (req, res) => {
  //res.render sends the page that you wish to load with that URL
  //!!!default folder ejs looks is ***/views***, (also dont NEED .ejs)
  res.render("home.ejs");
});

//loads the second page url /secondPage
app.get("/musicNotes", (req, res) => {
  //Sets a second parameter called "rand" that is avaliable in the template for use
  res.render("musicNotes.ejs");
});

//loats another page with the url /picPage
app.get("/picPage", (req, res) => {
  res.render("picPage.ejs");
});

//sets the node script.js command to open a server listening on the specified port
//lets you go to localhost:3000 to load the app (requires node script.js running)
app.listen(3000, () => {
  console.log("listening on port 3000");
});
