const Discord = require('discord.js');
const config = require('../config.json');
const fetch = require('node-fetch');
require('dotenv').config();

module.exports.run = async (client, message, args) => {
  //command code goes here

  let guildCache = message.guild.roles.highest;
  console.log(guildCache);
  
  
  
  
  //COMMANDS v.2
  //table values
//   let commands= {
//     "kick": {
//       "use": "Kicks specified user",
//       "example": "!kick @user"
//     },
//     "ban": {
//       "use": "Bans specified user w/reason",
//       "example": "!ban @user *reason*"
//     },
//     "unban": {
//       "use": "Unbans specified user",
//       "example": "!unban @user"
//     }
//   }  
    
//   const cmdEmbed = new Discord.MessageEmbed()
//         .setColor ('#0099ff')
//         .setTitle ('Server commands')
//         .setDescription ('These are the moderation commands for the bot. Call upon them with the __"!"__ prefix. Below is a list with specification of use:')
//           // space
//          .addField ("\u200B", "\u200B")
//          // command table
//           .addFields (
//             { name: "**Commands**", value: `\u200B \n Kick \n Ban \n Unban`, inline: true },
//             { name: "**Use**", value: `\u200B \n ${commands.kick['use']} \n ${commands.ban['use']} \n ${commands.unban['use']}`, inline: true },
//             { name: "**Example**", value: `\u200B \n ${commands.kick['example']} \n ${commands.ban['example']} \n ${commands.unban['example']}`, inline: true },
//           )
//          //space
//          .addField ("\u200B", "\u200B")
//         .addField ('**Full commands & feature list**', '[Commands](https://github.com/teequa/TeeqBot/blob/master/commandlist.md) - [Features](https://github.com/teequa/TeeqBot/blob/master/features.md)')
//         .setTimestamp ()
//       message.channel.send(cmdEmbed);

// let channels = message.guild.channels.cache.map(c => c.id)
// let priv_c = config.privChannels

// let filtered = channels.filter( (el) => !priv_c.includes(el));

// let f = filtered.slice(2, -2)
// console.log(f);


// console.log(channels);
// console.log(pub_c);
// console.log(channels);

// console.log(filtered);




}
module.exports.help = {
  name: "test",
  description: "test fetch of live status",
  authorization: "mod"
}
