const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args, member) => {
  //command code goes here
  let memRole = message.member.roles.cache
  let reason = args.join(" ").slice(22);

  if (!memRole.get(config.moderator))
  return message.reply('You do not have permission to use this command');

  const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
        if (member) {
          let modlog = message.guild.channels.cache.find(channel => channel.id === config.modlogChannel);
          let reason = args.join(" ").slice(22);
            if (!reason) return message.channel.send('Please add a reason for your ban request');

          const banEmbed = new Discord.MessageEmbed()
          .setColor ('#ff0000')
          .setTitle (`${user.username} was banned`)
          .addFields (
            {name: `was banned for`, value: `${reason}`},
            {name: `Ban issued by:`, value: `${message.author.username}`},
            {name: `victim's ID`, value: `${user.id}`}
          )
          .setTimestamp()

          member.ban(user, {reason: reason}).then(() => {
            modlog.send(banEmbed);
            message.channel.send(`${user.tag} was banned by ${message.author.tag}`);
            console.log(`${user.tag} was banned by ${message.author.tag} Reason: ${reason}`);
          }).catch(err => {
            message.reply('unable to ban user');
            console.log(err);

          });
        } else{
          message.reply(`that user is not a member of this server`);
        }
      } else {
        message.reply('you need to specify a user');
      }
    }

module.exports.help = {
  name: "ban",
  description: "Used to ban a specified user",
  authorization: "mods"
}
