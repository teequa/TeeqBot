const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  //command code goes here

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

module.exports.help = {
  name: "commands",
  description: "used to display a command list"
}
