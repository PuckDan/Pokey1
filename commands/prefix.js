const Discord = require('discord.js');
const db = require('quick.db')
const prefix = 'p!';
module.exports = {
    name: 'prefix',
    description: "this is a prefix command!",
    execute(message, args){
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have the right premissons to use this command.')
        if (!args[1]) return message.channel.send('You need to specify a prefix')
        if (args[1].length > 3) return message.channel.send('A prefix can only be 3 or less charcters')
        if (args [1] === db.get(`guild_${message.guild.id}_prefix`)) return message.channel.send('That is already your preifx')
        if (args [1] === "p!") db.delete(`guild_${message.guild.id}_prefix`)
        db.set(`guild_${message.guild.id}_prefix`, args[1])
        return message.channel.send(`I have now set your prefix to ${args[1]}`)
    }
}