const Discord = require('discord.js');
const config = require('./config.json');
const newUsers = new Discord.Collection();

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Teeq client is up and running!`);
});

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find(channel => channel.id === config.welcomeChannel);
  const newUser = member.has(member.id, member.user);
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

  if (cmd === "admin") {
  message.channel.send(`The supreme leader is ${message.member.user}`);
} else

if (cmd === "invite") {
  message.channel.send(`invitation link: ${config.invite}`);
}

});

client.login(config.token);
