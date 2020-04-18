const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  //command code goes here

  let memRole = message.member.roles.cache.get(config.roles["moderator"]);
  let streamer = message.mentions.members.first();
  let streamRole = message.guild.roles.cache.find(r => r.name === "streaming");
  const timer = 2.5 * 3600000;

  if (!memRole) return message.reply("You do not have permission to use this command");
  if (!streamer) return message.reply("You need to specify a user");
  if (streamer._roles.includes(streamRole.id)) return message.reply("This user already has streaming privlages");

  streamer.roles.add(streamRole.id);

  setTimeout(function() {
    streamer.roles.remove(streamRole.id);
  }, timer);

}

module.exports.help = {
  name: "stream",
  description: "grant specified user streaming privleged",
  authorization: "moderator"
}