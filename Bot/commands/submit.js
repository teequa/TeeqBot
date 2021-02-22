const Discord = require('discord.js');
const config = require('../config.json');
const recentUse = new Set();

module.exports.run = async (client, message, args) => {
  //command code goes here
const submit = message.guild.channels.cache.find(c => c.id === "809593583131688972");
let submission = args[1];
let twitchSub = message.content.slice(8);
let usr = message.author.username
let msgAttachment = message.attachments.first();


    if (args.length > 2 && !message.content.includes("https://")) { //6a0dad

        const t_submissionEmbed = new Discord.MessageEmbed()
            .setColor ('#6a0dad')
            .setTitle(`${usr} submitted an emote`)
            .addFields (
                { name: `Twitch Emote submission`, value: `${twitchSub}`}
            )
            .setTimestamp()

        submit.send(t_submissionEmbed);

        message.channel.send(":white_check_mark: Thank you for your submission, a submission ticket has been sent to our mod team for review").then(message =>{
            message.delete({timeout: 5000})
        }); message.delete({timeout: 5000})

        console.log(`${usr} just submitted a twitch emote: ${twitchSub}`);

        recentUse.add(message.author.id);
        setTimeout(() => {
            recentUse.delete(message.author.id);
        }, 3000);

    } else if (args[1] || msgAttachment && !message.content.includes("https://")) {

        if (msgAttachment) {
            const submissionEmbed = new Discord.MessageEmbed()
          .setColor ('#3aa832')
          .setTitle(`${usr} submitted an emote`)
          .addFields (
              { name: `Emote submission`, value: `${submission}`}
          )
          .setImage(msgAttachment["attachment"])
          .setTimestamp()

          submit.send(submissionEmbed);

          message.channel.send(":white_check_mark: Thank you for your submission, a submission ticket has been sent to our mod team for review").then(message =>{
            message.delete({timeout: 5000})
        }); message.delete({timeout: 5000})
        console.log(`${usr} just submitted a server Emote: ${submission}`);

        } else {

      const submissionEmbed = new Discord.MessageEmbed()
          .setColor ('#3aa832')
          .setTitle(`${usr} submitted an emote`)
          .addFields (
              { name: `Emote submission`, value: `${submission}`}
          )
          .setTimestamp()

      submit.send(submissionEmbed);

      console.log(`${usr} just submitted a server Emote: ${submission}`);


      message.channel.send(":white_check_mark: Thank you for your submission, a submission ticket has been sent to our mod team for review").then(message =>{
          message.delete({timeout: 5000})
      }); message.delete({timeout: 5000})
        }
    } else {
        message.reply("Please state a emote for submission. Max 1 per use, no links").then(message =>{
            message.delete({timeout: 5000})
        }); message.delete({timeout: 5000})
    }


}
module.exports.help = {
  name: "submit",
  cooldown: 5,
  description: "used to submit emotes for use in the discord channel",
  authorization: "users"
}
