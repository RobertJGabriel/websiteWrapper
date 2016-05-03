#!/usr/bin/env node

var path = require('path');
var pkg = require(path.join(__dirname, 'package.json'));
var siteWrapper = require('./index');


// Parse command line options

var program = require('commander');

program
  .version(pkg.version)
  .option('-u, --url <url>', 'URL of the website you want to wrap. Defaults to websiteWrapper')
  .option('-t, --title <title>', 'Title of the website you want to give the wrapped Website. Defaults to websiteWrapper')
  .option('-i, --icon <icon>', 'Location of the icon you want to use. To convert images to icns visit iconverticons')
  .parse(process.argv);

var url = program.url || "http://www.google.ie";
var title = program.title || "websiteWrapper";
var icon = program.icon || __dirname + "/temp/icon.icns";


siteWrapper.create(url, title, icon);
