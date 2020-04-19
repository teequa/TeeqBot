const Discord = require('discord.js');
const config = require('../config.json');
const fetch = require('node-fetch');
require('dotenv').config();
const jsonfile = require('jsonfile');
const file = '/tmp/data.json';
const fs = require("fs");
const path = require("path");


module.exports.run = async (client, message, args) => {
  //command code goes here

  const dir = path.join(__dirname, '../support');

  let reporter = message.author;
  let reported = message.mentions.members.first();
  let infringment = args.join(" ").slice(255);
  
  let today = new Date();
  let date= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date+' '+time;

//Read dir and sort files by lates addition

  console.log(reporter.username);
  
}
module.exports.help = {
  name: "test",
  description: "test fetch of live status",
  authorization: "mod"
}
