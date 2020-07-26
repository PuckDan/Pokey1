module.exports = {
    name: 'youtube',
    description: "this is a youtube command!",
    execute(message, args){
        message.channel.send("**Devloper's YouTube Channel:** https://www.youtube.com/channel/UCvMD4VUlfKZ6mLx1RSwhegg?")
            message.channel.send("**Poke's YouTube Channel:** https://www.youtube.com/channel/UCQAgdrJklNu-S3MbEOwDgqQ")
    }
}