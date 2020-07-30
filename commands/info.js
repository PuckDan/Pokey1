const Discord = require('discord.js');
var version = ' 1.0.0';
module.exports = {
    name: 'info',
    description: "this is a info command!",
    execute(message, args){
        if (args[1] === 'version') {
            message.channel.send('Version' + version)
        } else {
            const embed = new Discord.MessageEmbed()
          .setTitle('Infomation About Pokey')
          .addField('About Pokey','Pokey is a Moderation/Fun bot \n this bot has alot of features that you will like!')
          .setThumbnail('https://cdn.discordapp.com/attachments/723744088981241878/738219121803526264/Pokeypfp.jpg')
          .setColor(0xE3D9D9)
          message.channel.send(embed);
        }
    }
}