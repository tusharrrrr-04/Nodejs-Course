const fs = require("fs");

fs.writeFile("output.txt", "Writing file", (err) => {
  if (err) console.log("Error occurred");
  else console.log("File Written Successfully");
});
