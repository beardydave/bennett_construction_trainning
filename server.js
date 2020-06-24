const express = require("express");
const ejs = require("ejs");
const port = 3000;

// --- Page Title --- //
const homeTitle = "Vern Construction Training";
const trainingTitle = "Training";
const aboutTitle = "About";
const contactTitle = "Contact";

// --- Page Icons --- //
const homeIcon = "icofont-vehicle-crane";
const trainingIcon = "icofont-vehicle-excavator";
const aboutIcon = "icofont-engineer";
const contactIcon = "icofont-phone";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: homeTitle,
    pageIcon: homeIcon,
  });
});

app.get("/trainning", (req, res) => {
  res.render("trainning", {
    pageTitle: trainingTitle,
    pageIcon: trainingIcon,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: aboutTitle,
    pageIcon: aboutIcon,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    pageTitle: contactTitle,
    pageIcon: contactIcon,
  });
});

app.listen(process.env.PORT || port, () => {
  console.log("Server started on port 3000");
});
