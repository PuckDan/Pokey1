const Discord = require('discord.js');
var version = ' 1.0.0';
module.exports = {
    name: 'info',
    description: "this is a info command!",
    execute(message, args){
        if (args[1] === 'version') {
            message.channel.send('Version' + version)
        } else {
            message.channel.send('Error do (p!help info) to learn more about the command.');
        }
    }
}