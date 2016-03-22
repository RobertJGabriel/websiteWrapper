
# Website Wrapper
# About
This Project does what it says on the tin. Create a dmg of a website so you can have it as a quick shortcut in the dock on osx,

# Installation

```shell
npm install websitewrapper
```

# Useage
You need to pass three things into it.

1. The url of the website you want to create the shortcut for.

2. The title of the website.

3. The icon (its full path) you want pass (To convert images to icns visit [iconverticons](https://iconverticons.com/online/) )

It will then create a folder called build . Mac app (.app) wrapper are there now  :)


```
var websitewrapper = require('websitewrapper'),

  websitewrapper.create("http://www.google.ie","batman","yeti.icns");


```

# Example
As you can see
Stupid project really but a nice on all the same.

![alt text](assets/example.png "Firebase Yeti")
