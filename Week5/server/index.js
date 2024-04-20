const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;


// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/public/css')); // http://localhost:4000/css
app.use('/js', express.static(__dirname + '/public/src')); // http://localhost:4000/js

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
app.listen(port, () => {
  console.log('Server started at http://localhost:%s', port);
});

// // Mock login endpoint
// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   // Validate username and password here (for demonstration, skip validation)
//   res.json({ success: true, message: "Login successful" });
// });
// // Mock registration endpoint
// app.post("/register", (req, res) => {
//   const { username, password } = req.body;
//   // Save user data to mock database (for demonstration, skip saving)
//   res.json({ success: true, message: "Registration successful" });
// });






