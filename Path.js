const path = require("path");
console.log(path.dirname("E:/NodeJs/PathModule/Path.js"));
console.log(path.extname("E:/NodeJs/PathModule/Path.js"));
console.log(path.basename("E:/NodeJs/PathModule/Path.js"));
//console.log(path.parse("E:/NodeJs/PathModule/Path.js"));
const mypath = path.parse("E:/NodeJs/PathModule/Path.js");
 console.log(mypath.name);

 const myPath = path.parse("E:/NodeJs/PathModule/Path.js");
 console.log(myPath.root);

 // There are many more example in node js but right now we follow highlighted pathmodule. 