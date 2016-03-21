
# Website Wrapper
# About
This Project does what it says on the tin. You can create a wrapper so you can have a nice shortcut for a website from you lancher or taskbar.


# Useage
You need to pass three things into it.
1. The url of the website you want to create the shortcut for.
2. The title of the website.
3. The icon (its address) you want pass (To convert images to icns visit [iconverticons](https://iconverticons.com/online/) )

It will then create a folder called build . Your exe and dmg wrapper are there now  :)


```
var websitewrapper = require('websitewrapper'),

  websitewrapper.create("http://www.google.ie","batman","yeti.icns");


```

# Example
As you can see
Stupid project really but a nice on all the same.

![alt text](assets/example.png "Firebase Yeti")
