const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  //command code goes here
let memRole = message.member.roles.cache
let reason = args.join(" ").slice(22);

if(!memRole.get(config.moderator)) return message.reply("not autorized");

let bannedMem = await message.guild.client.users.fetch(args[0])
  if(!bannedMem) return message.channel.send("no vaild user");

  try {
    message.guild.members.unban(bannedMem, {reason: reason})
    message.channel.send(`${bannedMem.tag} unbanned`);
  } catch(e) {
    console.log(e.message);
  }
}
module.exports.help = {
  name: "unban",
  description: "Used to unban a specified user"
}
