# My Portfolio
My Portfolio Site v2

> Apparently, this version weights around 300KB's whilst the first one is around
3MB... Not even counting jQuery and fontawesome... Web sure has improved quite a
lot lately.

<img src="readme.png">


## How to start developing

First, you need to have

- python3
- npm
- zip

Secondly, install dependencies
``` sh
$ sudo npm run setup
```

For development, you can use
``` sh
$ npm run dev
```
Which starts a live-server session on port 8080

To create a minified and standalone version of the project, do
``` sh
$ npm run publish
```
Which generates a zip file in the __build/__ directory. You can then later on
unzip this to your hosting and that's all you need to do.