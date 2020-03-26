const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.reply('hello');
  console.log('works');
}

module.exports.help = {
  name: "ping"
}
