const Discord = require('discord.js');
const config = require('../config.json');
const fetch = require('node-fetch');
require('dotenv').config();
var AsciiTable = require('ascii-table');

module.exports.run = async (client, message, args) => {
  //command code goes here
  
  //table values
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
        .addField ('Full commands & feture list', '[here](https://github.com/teequa/TeeqBot/blob/master/commandlist.md)')
        .setTimestamp ()
      message.channel.send(cmdEmbed);

}
module.exports.help = {
  name: "test",
  description: "test fetch of live status",
  authorization: "mod"
}
