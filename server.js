const express = require("express");
const ejs = require("ejs");
const port = 3000;

const homeTitle = "Vern Construction Trainning";
const trainningTitle = "Trainning";
const aboutTitle = "About";
const contactTitle = "Contact";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: homeTitle,
  });
});

app.get("/trainning", (req, res) => {
  res.render("trainning", {
    pageTitle: trainningTitle,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: aboutTitle,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    pageTitle: contactTitle,
  });
});

app.listen(process.env.PORT || port, () => {
  console.log("Server started on port 3000");
});
