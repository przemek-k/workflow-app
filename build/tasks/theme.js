const gulp = require('gulp');
const Firebase = require("firebase");
const fs = require('fs');

gulp.task('theme', function () {
  //TODO this needs to be parametrized
  var ref = new Firebase("https://glowing-fire-3914.firebaseio.com/theme");

  ref.on("value", function(snapshot) {
    var val = JSON.stringify(snapshot.val());
    fs.writeFile('dist/app/config/theme.json', val, (err) => {
      if (err) throw err;
    });
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});
