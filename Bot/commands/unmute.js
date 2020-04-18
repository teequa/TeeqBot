const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  //command code goes here

  let memRole = message.member.roles.cache.get(config.roles["moderator"]);
  let toMute = message.mentions.members.first();
  let mainRole = message.guild.roles.cache.find(r => r.name === "user");
  let mutedRole = message.guild.roles.cache.get(config.roles["muted"]);


  if (toMute._roles.includes(mutedRole.id)) return message.reply("this user is not muted");
  if (toMute === message.author.id) return message.reply("You cannot mute yourself");

  toMute.roles.add(mainRole.id);
  toMute.roles.remove(mutedRole.id);
  message.channel.send(`${toMute.user.username} was unmuted`);

}

module.exports.help = {
  name: "unmute",
  description: "unmutes a muted user",
  authorization: "moderator"
}
