const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  //command code goes here
const memRol = message.member.roles.cache.get(config.roles['moderator']);

if (!memRol) return message.reply('You\'re not authorized to use this command.')

let commands= {
  "kick": {
    "use": "Kicks specified user",
    "example": "!kick @user"
  },
  "ban": {
    "use": "Bans specified user w/reason",
    "example": "!ban @user *reason*"
  },
  "unban": {
    "use": "Unbans specified user",
    "example": "!unban @user"
  }
}  
  
const cmdEmbed = new Discord.MessageEmbed()
      .setColor ('#0099ff')
      .setTitle ('Server commands')
      .setDescription ('These are the moderation commands for the bot. Call upon them with the __"!"__ prefix. Below is a list with specification of use:')
        // space
       .addField ("\u200B", "\u200B")
       // command table
        .addFields (
          { name: "**Commands**", value: `\u200B \n Kick \n Ban \n Unban`, inline: true },
          { name: "**Use**", value: `\u200B \n ${commands.kick['use']} \n ${commands.ban['use']} \n ${commands.unban['use']}`, inline: true },
          { name: "**Example**", value: `\u200B \n ${commands.kick['example']} \n ${commands.ban['example']} \n ${commands.unban['example']}`, inline: true },
        )
       //space
       .addField ("\u200B", "\u200B")
      .addField ('**Full commands & feature list**', '[Commands](https://github.com/teequa/TeeqBot/blob/master/commandlist.md) - [Features](https://github.com/teequa/TeeqBot/blob/master/features.md)')
      .setTimestamp ()
    message.channel.send(cmdEmbed);
    }

module.exports.help = {
  name: "commands",
  description: "used to display a command list"
}
