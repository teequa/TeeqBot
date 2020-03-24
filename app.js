const Discord = require('discord.js');
const config = require('./config.json');

const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Teeq bot is up and running!`);
});

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;

  let cmd = message.content.split(" ")[0];
  cmd = cmd.slice(config.prefix.length);

  let arg = message.content.split(" ").slice(1);

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
  }

});

bot.login(config.token);
