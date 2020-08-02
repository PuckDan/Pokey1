const Discord = require('discord.js');
var version = ' 1.0.0';
module.exports = {
    name: 'userinfo',
    description: "this tells you about your discord account!",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
                    .setTitle('User Infomation')
                    .addField('Player Name', message.author.username)
                    .addField('Version', version)
                    .addField('Current Server', message.guild.name)
                    .setColor(0x00F7FF)
                    .setThumbnail(message.author.displayAvatarURL())
                    .setTimestamp()
                message.channel.send(embed);
    }
}