module.exports = {
    name: 'clear',
    description: "this is a clear command!",
    execute(message, args){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the right premissons to use this command.");
                if (!args[1]) return message.channel.send('**Error define a second argument**')
                message.channel.bulkDelete(args[1]);
    }
}