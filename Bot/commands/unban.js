const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  //command code goes here
let memRole = message.member.roles.cache
let reason = args.join(" ").slice(22);
let modlog = message.guild.channels.cache.find(channel => channel.id === config.channels["modlogChannel"]);

if (!memRole.get(config.roles['moderator'])) return message.reply('You do not have permission to use this command');

let user = args[0];
console.log(user);

if (user) {
  let userid = user.slice(3, -1);

    const unbanEmbed = new Discord.MessageEmbed()
    .setColor ('#228C22')
    .setTitle (`User was unbanned`)
    .addFields (
      {name: `User ID was unbaned`, value: `${user}`},
      {name: `Ban lifted by:`, value: `${message.author.username}`}
    )

  message.guild.members.unban(userid, {reason: reason}).then(() => {
    console.log(`${user} was unbanned from the server by ${message.author.tag} `);
    message.channel.send(`${user} was unbanned from the server by ${message.author.tag} `);
    modlog.send(unbanEmbed);

    }).catch(e => {
      console.log(e);
      message.channel.send('i was unable to unban this user');
      })
  } else message.reply('please specify a user');
}

module.exports.help = {

  name: "unban",
  description: "Used to unban a specified user",
  authorization: "mods"
}
