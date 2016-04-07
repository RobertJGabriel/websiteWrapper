#!/usr/bin/env node

var path = require('path');
var pkg = require(path.join(__dirname, 'package.json'));
var siteWrapper = require('./index');


// Parse command line options

var program = require('commander');

program
  .version(pkg.version)
  .option('-u, --url <url>', 'Url of the Site You want to Wrapper in Node Webkit (defaults to Google)')
  .option('-t, --title <title>', 'Title of the Website you want to give the Website (defaults to Google)')
  .option('-i, --icon <icon>', 'The icon (its full path) you want pass (To convert images to icns visit iconverticons )')
  .parse(process.argv);

var url = program.url || "http://www.google.ie";
var title = program.title || "Google";
var icon = program.icon || __dirname + "/temp/icon.icns";


siteWrapper.create(url, title, icon);
