const express = require("express");
const bodyParser = require("body-parser");
const users = require("./public/mock-server/users");
const { readData, writeData } = require("./read-write");

const app = express();
const PORT = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static("public"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Mock login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({
      success: false,
      message: "Login Failed due to Invalid username or password!",
    });
  }
});

// Mock registration endpoint
app.post("/register", (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password) {
    res.json({ success: false, message: "Username and password are required" });
    return;
  }

  // Check if username already exists
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    res.json({ success: false, message: "Username already exists" });
    return;
  }

  readData((err, users) => {
    if (err) {
      console.error("Error reading data:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    // Add new user to the mock database
    users.push({ username, password, email });

    writeData(users, (err) => {
      if (err) {
        console.error("Error saving data:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.json({
        success: true,
        users: users,
        message: "Registration successful",
      });
    });
  });
});

// Endpoint to read JSON data
app.get("/users", (req, res) => {
  readData((err, users) => {
    if (err) {
      console.error("Error reading data:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(users);
  });
});
