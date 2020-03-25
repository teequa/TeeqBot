const Discord = require('discord.js');
const config = require('./config.json');
const newUsers = new Discord.Collection();
// const embedList = require('./embeds.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Teeq client is up and running!`);
});

//User join/leave
client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find(channel => channel.id === config.welcomeChannel);
  //const newUser = member.has(member.id, member.user);
  if (!channel) return;

  if (member) {
  channel.send(`welcome ${member.user}`);
  console.log(`user: ${member.user} joined the server`);
}

});
client.on("guildMemberRemove", (member) => {
  if(newUsers.has(member.id)) newUsers.delete(member.id); {

    console.log(`user: ${member.user} has been removed from the server`);
  }
});

//COMMANDS
client.on("message", message => {
  //if(message.author.client) return;
   if (!message.content.startsWith(config.prefix)) return;

  let cmd = message.content.split(" ")[0];
  cmd = cmd.slice(config.prefix.length);

  let arg = message.content.split(" ").slice(1);

  let memRole = message.member.roles.cache;

  if (cmd === "welcome") {
    message.welcomeChannel.send('this is the welcome channel');
  }

  if (cmd === "hey") {
    message.channel.send(`hey there ${message.author}`);
  } else

  if (cmd === "ping") {
    message.channel.send('ping' + 'pong');
  } else

  if (cmd === "pong") {
    message.channel.send('ping..');
  } else

  if (cmd === "say") {
    message.channel.send(arg.join(" "));
  } else

  if (cmd === "mod") {
    message.channel.send(`this is the role id for the moderator role: ${config.moderator}`);
  } else

  if (cmd === "invite") {
  message.channel.send(`invitation link: ${config.invite}`);
}

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

  if (cmd === "ban") {

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
});

client.login(config.token);
