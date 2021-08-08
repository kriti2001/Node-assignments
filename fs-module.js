// Read file
var fs = require('fs');
fs.readFile('Demo.txt', 'utf8', function(err, data){
   console.log(data);
});
console.log('readFile called')


// Write file
var fs =  require('fs');
var content= "Experience is the name ";
fs.writeFile('Demo.txt', content , (err) => {
	if (err)
	     throw err;
	console.log('File saved!');
});


// Append file
var fs = require('fs');
var new_data = "everyone gives to their mistakes";
fs.appendFile('Demo.txt', new_data , (err) => {
	if(err)
		throw err;
	console.log('Append success');
});

// Rename file
var fs = require('fs');
fs.rename('Demo.txt', 'new_name.txt', (err) => {
	if (err)
		throw err;
	console.log('Renamed successfully');
});