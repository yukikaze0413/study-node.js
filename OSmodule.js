const os = require("os");

var totalMemory = os.totalmem(); // total memory in bytes
var freeMemory = os.freemem(); // free memory in bytes

//console.log("Total Memory: " + totalMemory );

console.log(`Total Memory: ${totalMemory} bytes`);
//这种模板式嵌入支持内嵌表达式，且原生支持多行字符串
console.log(`Free Memory: ${freeMemory} bytes`);
