# My Portfolio
My Portfolio Site v2

<img src="readme.png">


# How to run

First do `npm run setup` to install dependencies.
Then you can do `npm run dev` to start the development server which serves
the files within __src/__.

But if you want, you can do `npm run build`. That minifies files, and puts
them into __build/__. And then you can do `npm run start` to serve those files.

> NOTE: Npm will yell at you if you try to do `npm run start` without doing
`npm run build` first!

And if you want, you can zip the built files using `npm run pack`. That packs
all the necessary files into __build/packet.zip__ which you can basically
extract to your public_html folder on your hosting. And yes, this is the proof
of my laziness, no comment on that.