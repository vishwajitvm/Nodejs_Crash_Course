const express = require("express");
const app = express();

// APP MIDDLEWARE (Corrected placement and conditional execution)
app.use(requestFilter); // Apply middleware to all routes

function requestFilter(req, res, next) {
  if (!req.query.age) {
    return res.send("Please provide age"); // Use return for immediate response
  }
  else if (req.query.age < 18) {
    return res.send("Access denied"); // Use return for immediate response
  }
  next(); // Proceed to the next middleware or route handler if 'age' exists
}

// ROUTES (No changes needed based on prompt)
app.get("/", (req, res) => {
  res.send("This is home page");
});

app.get("/users", (req, res) => {
  res.send("This is users page");
});

app.get("/profile", (req, res) => {
  res.send("This is profile page");
});

app.get("/test", (req, res) => {
  res.send("This is test page");
});

app.listen(4500, () => console.log("Server listening on port 4500"));
