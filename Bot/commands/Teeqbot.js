const Discord = require('discord.js');
const config = require('../config.json');
const package = require('../package.json')

module.exports.run = async (client, message, args) => {
  //command code goes here

  const ver = package.version
  console.log(ver);
  
  message.channel.send(`TeeqBot is running on version: ${ver}, You can view the full Github Reposetory here: ${config.gitLink}`);
    

}

module.exports.help = {
  name: "teeqbot",
  description: "states version, and GIT repo",
  authorization: "everyone"
}
