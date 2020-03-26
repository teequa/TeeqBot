Kick

if (cmd === "kick") {
  if (!memRole.get(config.moderator))
  return message.reply('You do not have permission to use this command');

    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);

      if (member) {
        member.kick('Were kicked form the channel').then(()=> {
          message.reply(`succsessfuly kicked ${user.tag}`);
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

Ban

if (!memRole.get(config.moderator))

  return message.reply('You do not have permission to use this command');

    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);

      if (member) {

        const banEmbed = new Discord.MessageEmbed()
        .setColor ('#ff0000')
        .setTitle ('User banned')
        .addFields (
          {name: `${user.tag} banned`, value: 'The user was banned by infringment of the server rules'}
        )
        .addField (`Ban issued by:`, `${message.author.tag}`)
        .setTimestamp()

        member.ban().then(() => {
          message.channel.send(banEmbed);
          console.log(`${user.tag} was banned by ${message.author.tag}`);
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

Commands

const cmdEmbed = new Discord.MessageEmbed()
      .setColor ('#4dff00')
      .setTitle ('Server commands')
      .setDescription ('These are Useful commands that you can use in the discord server')
      .addFields (
        { name: `${config.prefix}invite`, value:'Generates a invite link for use'},
        { name: `${config.prefix}kick`, value:'Kicks specified user'},
        { name: `${config.prefix}ban`, value:'Bans specified user'}
      )
    message.channel.send(cmdEmbed);
  }
