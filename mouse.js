var mouse = require('osx-mouse')();
var infile = require('fs');
var wstream =  infile.createWriteStream('output.txt');

mouse.on('move', fuction(x, y) {
    //console.log(x, y);
    if (x != null) {
          wstream.write('1\n');
//      infile.writeFile("/tmp/test.txt", "1", function(err) {
  //        if(err) {
    //                return console.log(err);
      //            }
//          console.log("The file was saved!");
      //});
wstream.end();
    }


});
