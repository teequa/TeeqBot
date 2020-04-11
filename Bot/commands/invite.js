const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  //command code goes here
  let memRole = message.member.roles.cache;
    if(!memRole.get(config.roles['moderator']))
    return message.reply('You do not have authorization to use this command');

  message.channel.send(config.inviteLink);
}

module.exports.help = {
  name: "invite",
  description: "used to push a invitation link, by a mod"
}
