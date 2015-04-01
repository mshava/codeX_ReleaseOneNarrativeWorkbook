var fs = require('fs');

var linesInFiles = function(folderName){

  var week1 = fs.readdirSync(folderName);

  var linesInFiles = [];

week1.forEach(function(menu){
  var content = fs.readFileSync('./files/week1/'+ menu , 'utf8');
  
  var lines = content.split('\n');
  for(var i = 0; i < lines.length; i++){
    linesInFiles.push(lines[i]);
  }
});

console.log(linesInFiles);
return linesInFiles;
}

exports.linesInFiles = function(folderName) {
  return linesInFiles(folderName);
}

exports.linesInFilesAsync = function(folderName, callback) {
  var lines =linesInFiles(folderName);
  callback(null, lines);
}







//var fs = require ('fs');
//var location = fs.readdirSync('./files/week1');
//console.log(location);

//var fs = require("fs");

//var data = fs.readFileSync('./files/week1/Friday.txt');

//console.log(data.toString());
//console.log("Program Ended");




//var fs = require('fs');
//fs.readFilesAsync('./files/week1');
//}

//var fs = require('fs');
 //fs.readFileSync('./files/week1', function (err, files) {
  	//if (err) 
	//	throw err;
  	//		console.log('data');
//});

//fs.('./files/week1') 
  	//	console.log(data);


//var linesInFiles = require;

//console.log(linesInFiles.files());
//console.log(linesInFiles.week1());

//var fs = require("fs");

//var fs = require('fs');
//fs.readFile('./files/week1/Friday.txt', function (err, data) {
 //  if (err) return (err);
   //console.log("Asynchronous read: " + data.toString());
//});

 
//var data = fs.readFileSync('./files/week1');
//console.log("Synchronous read: " + data.toString());

//console.log("Program Ended");

//

//var fs = require("fs");
//var data = fs.readFileSync('./files/week1');
//console.log(data.toString());
//console.log("Program Ended");


//var fs = require('fs');

//fs('./files/week1', function (err) {
  //if (err) throw err;
  //console.log('data');
//});



//fs = require('fs');
//fs.readFile('./files/week1');




//var fs = require ('fs');
//var location = fs.readdirSync('./files/week1');
//console.log(location);

//location.forEach(function(files){
//var readfiles = fs.readFileSync('./files/week1'+ files,'utf8');r 
//console.log(readfiles.split('\n'));

//});

// fs = require('fs');
//fs.readFile('./files/week1','utf8', function(error, text) {
  //   if ('error');
	//console.error (error);
	  //   console.log('The file contained:', text);
 //});

//var fs = require ('fs');
//fs.readFile('./files/week1', function (error, buffer) {
//if (error);
//throw error;
//console.log('The file contained','buffer.length', 'bytes.','The first byte is :', buffer[0]);
//});




//var fs = linesInFiles('./files/week1',  function(folderName){
//};

//fs.('./files/week1', function (err, files) {
  //		if (err) throw err;
  //			console.log('data');
//});




































