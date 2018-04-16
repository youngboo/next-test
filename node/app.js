const dns = require("dns");
console.log(dns.EOF);
const fs = require('fs');
fs.readFile('./index.js','utf-8',(err,data)=>{
    var newData = data.replace(/\/\*[\s\S]*\*\//,'');
   fs.writeFile('./copy.js',newData,(err)=>{
       if(!err){
           console.log("写入成功")
       }
   })
});