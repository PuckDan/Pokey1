---
description: This is a page where you will see all the moderation commands for pokey!
---

# Moderation

## 

{% hint style="warning" %}
 This bot only uses discord.js a quick.db.
{% endhint %}

## Clear Command

Clears A Message From The Channel. 

Usage p!clear &lt;amount&gt;

Example `p!clear 10` 

User Permissions: `Manage Messages` 

Bot Permissions: `Manage Messages`

`Code:`

```javascript
 const Discord = require('discord.js');
 case: 'clear':
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the right premissons to use this command.");
                if (!args[1]) return message.channel.send('**Error define a second argument**')
                message.channel.bulkDelete(args[1]);
                break;
```

## Prefix &lt;character&gt; Command

Can be used to change the bots prefix!

Usage p!prefix &lt;character&gt;

Example `p!prefix !`

User Permissions: `Manage Server` 

Bot Permissions: `Manage Server`

`code:`

```javascript
const Discord = require('discord.js');
const db = require('quick.db')
const prefix = '!';
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have the right premissons to use this command.')
        if (!args[1]) return message.channel.send('You need to specify a prefix')
        if (args[1].length > 3) return message.channel.send('A prefix can only be 3 or less charcters')
        if (args [1] === db.get(`guild_${message.guild.id}_prefix`)) return message.channel.send('That is already your preifx')
        if (args [1] === "!") db.delete(`guild_${message.guild.id}_prefix`)
        db.set(`guild_${message.guild.id}_prefix`, args[1])
        return message.channel.send(`I have now set your prefix to ${args[1]}`)
```

more commands coming soon!

