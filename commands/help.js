const Discord = require('discord.js');
var Info = 'Info • 3';
var mod = 'Moderation • 1';
var subcmd = 'SubCommands';
var usagecmd = 'Usage';
var percmd = 'Bot Permissons';
var cat = 'Catgory';

module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args){
        if (args[1] === 'ping') {
            const embed = new Discord.MessageEmbed()
            .setTitle('Ping')
                .setDescription('A Very Basic Ping Command!', true)
                .addField(usagecmd, 'p!ping', true)
                .addField(cat,'Fun', true)
                .setFooter('Made By PuckZ')
            message.channel.send(embed);
        }
       else if (args[1] === 'info') {
            const embed = new Discord.MessageEmbed()
                .setTitle('Info')
                .setDescription('Infomation About Pokey', true)
                .addField(subcmd, 'version', true)
                .addField(usagecmd, 'p!info', true)
                .addField(cat,'Info', true)
                .addField(percmd, '``Embed Links``', true)
                .setFooter('Made By PuckZ')
            message.channel.send(embed);

            } else if (args[1] === 'userinfo') {
                const embed = new Discord.MessageEmbed()
                .setTitle('Userinfo')
                .setDescription('User Infomation', true)
                .addField(usagecmd, 'p!userinfo', true)
                .addField(cat,'Info', true)
                .setFooter('Made By PuckZ')
            message.channel.send(embed);

             

          
        } 

         else {
            

            const embed = new Discord.MessageEmbed()
                .setTitle('Need Help? Here You Go!')
                .setDescription('Commands marked with an * have subcommands.')
                .addField(mod, '``clear``*')
                .addField(Info, '``Info``*, ``help``, ``ping``')
                .setFooter('Made By PuckZ')
            message.channel.send(embed);



    }
}
}