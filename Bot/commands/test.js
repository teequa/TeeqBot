const Discord = require('discord.js');
const config = require('../config.json');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
  //command code goes here
  let memRole = message.member.roles.cache;
  if (!memRole.get(config.moderator))
  return message.reply('You do not have permission to use this command');

// GET user_id of userlogin name from the Twitch API

  // const usr = "https://api.twitch.tv/helix/users?login=teequa"
  // const response = await fetch(usr, {
  //   method: 'GET',
  //   headers: {
  //     'Client-ID': '79neevsjflxk9feglinpizs2007ws8',
  //     'Authorization': '3dwuvksfyupp9eoq1yhybfcxd3hw9p'
  //   }
  // })
  // const json = await response.json();

  // console.log(json);

// GET channel status from user_id from the Twitch API

  const usr = "https://api.twitch.tv/helix/streams?user_id=37618583"
    const response = await fetch(usr, {
      method: 'GET',
      headers: {
      'Client-ID': '79neevsjflxk9feglinpizs2007ws8',
      'Authorization': '3dwuvksfyupp9eoq1yhybfcxd3hw9p'
      }
    })
  const json = await response.json();

  console.log(json);

}
module.exports.help = {
  name: "test",
  description: "test fetch of live status",
  authorization: "mod"
}
