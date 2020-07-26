const Discord = require('discord.js');
const fs = require('fs');
const {
    timeLog,
    timeStamp
} = require('console');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
const token = 'NzM0OTA0ODQwMTkwMTY0OTky.XxYfdw.UQBodutUqnr1O0eV26dpBXjCez8';

const prefix = 'p!';
var version = ' 1.0.0';
var Info = 'Info • 3';
var mod = 'Moderation • 1';
var subcmd = 'SubCommands';
var usagecmd = 'Usage';
var percmd = 'Bot Permissons';

client.on('ready', () => {
    console.log('Pokey Is Online!');
    client.user.setActivity(`${prefix}help | Pokey!`, {
        type: 'PLAYING'
    }).catch(console.error)

})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);


    switch (args[0]) {
        case 'ping':
            client.commands.get('ping').execute(message, args);
            break;
        case 'youtube':
            client.commands.get('youtube').execute(message, args);
            break;
        case 'help':
            client.commands.get('help').execute(message, args); {} {

                break;
            }
            case 'clear':
                client.commands.get('clear').execute(message, args);
                break;
            case 'userinfo':
                client.commands.get('userinfo').execute(message, args);
                break;
            case 'info':
                client.commands.get('info').execute(message, args); {

                    break;
                }
                case 'kick':

                    break;


    }
})

client.login(token);