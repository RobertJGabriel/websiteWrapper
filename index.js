var fs = require('fs');
var NwBuilder = require('nw-builder');
var move = require('file-move');
var rename = require("gulp-rename");
var gulp = require('gulp');


/**
 * Create A HTML Wrapper for nicer logos
 *
 * @param  {String} html
 * @return {String}
 */
module.exports = {


  create: function(url, title, icons) {


    gulp.src(icons)
      .pipe(rename("icon.icns"))
      .pipe(gulp.dest(__dirname + '/temp'));

    fs.writeFile('./temp/index.html', '<!DOCTYPE html><html lang="en"><head style="border:0px;margin:0px;"><title>' + title + '</title></head><body style="border:0px;margin:0px;"><iframe src="' + url + '" style="border:0;width:100vw; height:100vw;padding:0;"></iframe></body></html>', function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });

    var nw = new NwBuilder({
      files: ['./temp/index.html', './temp/icon.icns', './temp/package.json', 'node_modules/**'], // use the glob format
      platforms: ['osx64', 'win64'],
      appName: title,
      macIcns: "./temp/icon.icns",
      buildDir: "../../build",
      version: "0.12.0",
      zip: false

    });
    //Log stuff you want
    nw.on('log', console.log);
    // Build returns a promise
    nw.build().then(function() {
      console.log('all done!');
    }).catch(function(error) {
      console.error(error);
    });
  }
};
