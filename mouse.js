var mouse = require('osx-mouse')();
var infile = require('fs');
mouse.on('move', fuction(x, y) {
    //console.log(x, y);
    if (x != null) {

      infile.writeFile("/tmp/", "1", function(err) {
          if(err) {
              return console.log(err);
          }

//          console.log("The file was saved!");
      });

    }


});
