var fs = require('fs');
var http = require('http');

http.createServer(function (req,res)
{
var text = "This is the example of the node js file system using synchronous and asynchronous";
//This is the example of the asynchronous writeFile
fs.writeFile('example.txt',text,function(err)
{
   if(err)
    {
      console.error(err);
    }
    
   //console.log(data);
   res.write("Successfully file created");
   res.end();
   console.log("file has been creating and record has been added");
});
}).listen(8080);

//This is the example of the asynchronous readFile
http.createServer(function (req,res)
{
  fs.readFile("example.txt",function(err,data)
  {
    if(err)
    { 
      console.error(err);
    }
    
    res.write(data);
    res.end();
    console.log("The give file has been reading Successfully");
  });
}).listen(8081);

console.log("2nd calling");
//This is the example of the synchronous writfile
var text = "This is the synchronous writeFile";
var data = fs.writeFileSync('example2.txt',text);
  console.log("writing the data");
  console.log(data);
  
//This is the example of the synchronous writfile
var data = fs.readFileSync("example2.txt");
console.log("File reading from ... ");
console.log(data.toString());

