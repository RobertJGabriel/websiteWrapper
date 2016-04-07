#! /usr/local/bin/node
var fs = require('fs');
var NwBuilder = require('nw-builder');
var move = require('file-move');
var rename = require("gulp-rename");
var gulp = require('gulp');
var osenv = require('osenv');
var username = require('username');
var chalk = require('chalk');


module.exports = {

  /**
   * Create The ex or dmg
   * @param  {String} Url
   * @param  {String} Title
   * @param  {String} Icons
   * @return {none} none
   */
  create: function(url, title, icons) {

    var html = '<!DOCTYPE html>' +
      '<html lang="en">' +
      '<head style="border:0px;margin:0px;">' +
      '<title>' + title + '</title>' +
      '<script>' +
      'var gui=require("nw.gui"),menu=new gui.Menu({type:"menubar"}),menuItems=new gui.Menu;menu.createMacBuiltin("' + title + '",{hideEdit:!1,hideWindow:!0}),gui.Window.get().menu=menu;' +
      '</script>' +
      '</head>' +
      '<body style="border:0px;margin:0px;">' +
      '<iframe src="' + url + '" style="border:0;width:100vw;height:100vw;padding:0;"></iframe>' +
      '</body>' +
      '</html>';


    // Gets thee current username of the user logged in
    username().then(username => {

      /**
       * Create A HTML Wrapper for nicer logos
       * @param  {String} Path to the icons
       */
      gulp.src(icons)
        .pipe(rename("icon.icns"))
        .pipe(gulp.dest(__dirname + '/temp'));


      /**
       * Move the Files and create the Html
       * @param  {String} Path to the icons
       */
      fs.writeFile(__dirname + '/temp/index.html', html, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });


      /**
       * Nw.js Build system to create the files.
       * @param  {String} Path to the icons
       */
      var nw = new NwBuilder({
        files: [__dirname + '/temp/index.html', __dirname + '/temp/icon.icns', __dirname + '/temp/package.json', __dirname + 'node_modules/**'], // use the glob format
        platforms: ['osx64', 'win64'],
        appName: title,
        macIcns: __dirname + "/temp/icon.icns",
        buildDir: "/Users/" + username + "/Desktop/" + "/build",
        version: "0.12.0",
        zip: false
      });



      /**
       * Log system information
       * @param  {none} none
       */
      nw.build().then(function() {
        console.log(chalk.green.bold("All Done!!! Enjoy " + chalk.red("<3")));
      }).catch(function(error) {
        console.log(chalk.red.bold("Failed"));
      });


    });
  }
};
