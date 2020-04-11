const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  //command code goes here
const modLog = message.guild.channels.cache.find(channel => channel.id === config.channels['modlogChannel']);
const memRol = message.member.roles.cache.get(config.roles['moderator']);

  const cmdEmbed = new Discord.MessageEmbed()
        .setColor ('#0099ff')
        .setTitle ('Server commands')
        .setDescription ('These are the moderation commands for the bot. Call upon them with the __"!"__ prefix. Below is a list with specification of use:')
        .addFields (
          { name: '\u200B', value: '\u200B' },
          { name: `${config.prefix}invite`, value:'Generates a invite link for use',},
          { name: '\u200B', value: '\u200B' },
          { name: `${config.prefix}kick`, value:'Kicks specified user', inline: true},
          { name: `Example use`, value:'!kick @username', inline: true},
          { name: '\u200B', value: '\u200B' },
          { name: `${config.prefix}ban`, value:'Bans specified user', inline: true},
          { name: `Example use`, value:'!ban @username *reason*', inline: true},
          { name: '\u200B', value: '\u200B' },
          { name: `${config.prefix}unban`, value:'Unbans a specified user on the ban list', inline: true},
          { name: `Example use`, value:'!unban @username', inline: true},
        )
        .addField ('Full commands & feture list', '[here](https://github.com/teequa/TeeqBot/blob/master/commandlist.md)')
        .setTimestamp ()
      message.channel.send(cmdEmbed);
    }

module.exports.help = {
  name: "commands",
  description: "used to display a command list"
}
