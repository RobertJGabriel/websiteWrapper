
![alt text](assets/readme.png "Firebase Yeti")
# About
This project does what it says on the tin. Wrap a website so you can have it as a quick shortcut in the dock on osx.

# Installation

```shell
npm install websitewrapper
```

# Usage
You need to pass three things into it.

1. -u :  The url of the website you want to create the shortcut for.

2. -t : The title of the website.

3. -i : The icon (its full path) you want pass (To convert images to icns visit [iconverticons](https://iconverticons.com/online/) )

It will then create a folder called build on your desktop. Everything is in there now.

## Command
```shell
websitewrapper -u http://www.google.ie -t Google -i /Users/robertjgabriel/desktop/icon.icn
```


## Code
```javascript
var websitewrapper = require('websitewrapper'),

  websitewrapper.create("http://www.google.ie","batman","yeti.icns");

```

# Support
Osx at the moment.
Feel Free to make a pull request for a windows version.

# Example
As you can see
Stupid project really but a nice on all the same.

![alt text](assets/example.png "Firebase Yeti")
