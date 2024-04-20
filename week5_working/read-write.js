const fs = require("fs");

// Function to read users
const readData = (callback) => {
  // Require the data file
  const users = require("./public/mock-server/users");
  callback(null, users);
};

// Function to write/add new users
const writeData = (jsonData, callback) => {
  const dataString = "module.exports = " + JSON.stringify(jsonData, null, 2);
  fs.writeFile("./public/mock-server/users.js", dataString, "utf8", (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

module.exports = {
  readData: readData,
  writeData: writeData,
};