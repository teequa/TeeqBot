const Discord = require('discord.js');
const config = require('../config.json');
const fetch = require('node-fetch');
require('dotenv').config();

module.exports.run = async (client, message, args) => {
  //command code goes here

  let muted = config.roles["muted"];
  console.log(muted);
  
}
module.exports.help = {
  name: "test",
  description: "test fetch of live status",
  authorization: "mod"
}
