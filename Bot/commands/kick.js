const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  //command code goes here
  let memRole = message.member.roles.cache;

  if (!memRole.get(config.roles['moderator']))
  return message.reply('You do not have permission to use this command');

    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);

      if (member) {
        member.kick('Were kicked form the channel').then(()=> {
          message.reply(`succsessfuly kicked ${user.tag}`).then(() => {
            console.log(`${user.tag}, was kicked form the server`);
          });

        }).catch(err => {
          message.reply('unable to kick user');
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
  name: "kick",
  description: "Used to kick a defined user",
  authorization: "mods"
}
