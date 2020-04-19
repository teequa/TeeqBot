const Discord = require('discord.js');
const config = require('../config.json');
const fs = require('fs');

module.exports.run = async (client, message, args) => {
  //command code goes here

  let memRole = message.member.roles.cache.get(config.roles["moderator"]);
  let toMute = message.mentions.members.first();
  let toMuteroles = toMute._roles;
  let mainRole = message.guild.roles.cache.find(r => r.name === "user");
  let mutedRole = message.guild.roles.cache.find(r => r.name === "muted");
  let time = args[2];
  let time_s = time * 1000;
  let reason = args.join(" ").slice("30");
  let modlog = message.guild.channels.cache.find(channel => channel.id === config.channels["modlogChannel"]);
  
  if (!memRole) return message.reply("You're not authorized to use this command.")
  if (!toMute || toMute === "undefined") return message.reply("You need to specify user to mute");
  if (!reason) return message.reply("You need to specify a reason");
  if (!time) return message.reply("please specify a time(seconds) for the user to be muted");  
  if (toMute.id === message.author.id) return message.reply("You cannot mute yourself");
  if (toMute.id === config.teequa) return message.reply(`You fool, you cannot mute the Supreme Leader! \n \n Long live the regime!`);
  if (toMute._roles.includes(memRole.id)) return message.reply("You can't mute a moderator");
  if (!mainRole) return message.reply("no user role found");
  
  const muteEmbed = new Discord.MessageEmbed()
  .setColor ('#fff700')
  .setTitle (`${toMute.user.username} was muted`)
  .addFields (
    {name: `was muted for`, value: `${reason}`, inline: true},
    {name: "mute timer", value: `${time} seconds`, inline: true},
    {name: `mute issued by:`, value: `${message.author.username}`},
    {name: `victim's ID`, value: `${toMute.user.id}`}
  )
  .setTimestamp()

  toMute.roles.remove(toMuteroles) || toMute.roles.add(mutedRole.id);

  message.channel.send(`${toMute.user.username}, was muted for ${time} seconds`);
  modlog.send(muteEmbed);
  console.log(`${toMute.user.tag}, was muted for ${time} seconds by ${message.author.username}`);
  
  setTimeout(unmute => {
    toMute.roles.remove(mutedRole.id);
    toMute.roles.add(toMuteroles);
    console.log(`${toMute.user.tag}, was unmuted`);
  }, time_s);

}

module.exports.help = {
  name: "mute",
  description: "Mute specified user w/reson and *time*",
  authorization: "moderator"
}