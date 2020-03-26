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
          let banlog = message.guild.channels.cache.find(channel => channel.id === config.banLogChannel);
          let reason = args.join(" ").slice(22);

          const banEmbed = new Discord.MessageEmbed()
          .setColor ('#ff0000')
          .setTitle ('User banned')
          .addFields (
            {name: `${user.tag} banned`, value: `for ${reason}`}
          )
          .addField (`Ban issued by:`, `${message.author.tag}`)
          .setTimestamp()

          member.ban(user, {reason: reason}).then(() => {
            banlog.send(banEmbed);
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
  description: "Used to ban a specified user"
}
