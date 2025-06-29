const fs = require("fs");

// const files = fs.readdirSync("./"); //同步读取

// console.log(files);
//异步读取
fs.readdir("./", function (err, files) {
  
  if (err) console.log("Error:" + err);
  else console.log("Results:" + files);
});
