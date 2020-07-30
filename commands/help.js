const Discord = require('discord.js');
var Info = 'Info • 3';
var mod = 'Moderation • 1';
var fun = 'Fun • 1';
var subcmd = 'SubCommands';
var usagecmd = 'Usage';
var percmd = 'Bot Permissons';
var cat = 'Catgory';
var userpercmd = 'User Premissons';
var exe = 'Example';

module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args) {
        if (args[1] === 'ping') {
            const embed = new Discord.MessageEmbed()
                .setTitle('Ping')
                .setDescription('A Very Basic Ping Command!', true)
                .addField(usagecmd, 'p!ping', true)
                .addField(cat, 'Fun', true)
                .setTimestamp()
            message.channel.send(embed);
        } else if (args[1] === 'info') {
            const embed = new Discord.MessageEmbed()
                .setTitle('Info')
                .setDescription('Infomation About Pokey', true)
                .addField(subcmd, 'version', true)
                .addField(usagecmd, 'p!info', true)
                .addField(cat, 'Info', true)
                .addField(percmd, '``Embed Links``', true)
                .setTimestamp()
            message.channel.send(embed);

        } else if (args[1] === 'userinfo') {
            const embed = new Discord.MessageEmbed()
                .setTitle('Userinfo')
                .setDescription('User Infomation', true)
                .addField(usagecmd, 'p!userinfo', true)
                .addField(cat, 'Info', true)
                .setTimestamp()
            message.channel.send(embed);




        } else if (args[1] === 'clear') {
            const embed = new Discord.MessageEmbed()
                .setTitle('Clear')
                .setDescription('Clears A Message From The Channel.', true)
                .addField(usagecmd, 'clear <amount>', true)
                .addField(cat, 'Moderation', true)
                .addField(exe, 'p!clear 10', true)
                .addField(userpercmd, '``Manage Messages``', true)
                .addField(percmd, '``Manage Messages``', true)
                .setTimestamp()
            message.channel.send(embed);

        } else if (args[1] === 'youtube') {
            const embed = new Discord.MessageEmbed()
                .setTitle('YouTube')
                .setDescription('Sends a YouTube Link!', true)
                .addField(usagecmd, 'p!youtube', true)
                .addField(cat, 'Info', true)
                .setTimestamp()
            message.channel.send(embed);

        } else if (args[1] === 'help') {
            const embed = new Discord.MessageEmbed()
                .setTitle('Help')
                .setDescription('View all of Pokeys commands!', true)
                .addField(subcmd, 'Alot', true)
                .addField(usagecmd, 'p!help <command>', true)
                .addField(cat, 'Info', true)
                .addField(exe, 'p!help ping', true)
                .addField(percmd, '``Embed Links``', true)
                .setTimestamp()
            message.channel.send(embed);

        } else {


            const embed = new Discord.MessageEmbed()
                .setTitle('Need Help? Here You Go!')
                .setDescription('Do ``p!help <command>`` to learn more infomation about that command! \n Commands marked with an * have subcommands.', false)
                .addField('Updates','•**Updates Will Show Here!** \n**+** Major Update To The Help Command! \n **-** Deleted The Old Help Command')
                .addField('Commands','``ping`` A basic ping command! \n ``userinfo`` User Infomation \n ``info``* Tells you about Pokey! \n ``clear``* Clears a message from the channel! \n ``youtube`` Shows a YouTube link! \n ``help``* View all of Pokeys commands!', false)
                .addField('Add The Bot To Your Server!','Unfortunately this is a custom bot for my friend!')
                .setColor(0xFE1010)
                .setThumbnail('https://cdn.discordapp.com/attachments/723744088981241878/738219121803526264/Pokeypfp.jpg', false)
                .setTimestamp()
            message.channel.send(embed);



        }
    }
}