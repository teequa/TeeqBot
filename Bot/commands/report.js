const Discord = require('discord.js');
const config = require('../config.json');
const fs = require("fs");
const path = require("path");
const jsonfile = require('jsonfile');

module.exports.run = async (client, message, args) => {
  //command code goes here

  const dir = path.join(__dirname, '../support');
  
  
  let reporter = message.author;
  let reported = message.mentions.members.first();
  let reson = args[2];
  let infringment= args.join(" ").slice(30);
  
  let today = new Date();
  let date= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date+' '+time;

    if (!reported && !infringment) return message.reply('You need to specify a user and give a reason for your report.');
    if (!reported) return message.reply("You need to specify a user to report.");
    if (!reson) return message.reply('You need to state the reason of your report. \n \n What did the user do?');

//Read dir and sort files by lates addition

  dirfiles = fs.readdir(dir, function(err, files) {
    files = files.map(function (fileName) {
      return {
        name: fileName,
        time: fs.statSync(dir + '/' + fileName).mtime.getTime()
      };
    })
    .sort(function (a, b) {
      return b.time - a.time; })
    .map(function (v) {
      return v.name; });
      console.log(files);

//Read and add incriment of support ticket 

    jsonfile.readFile(dir + '/' + files[0], function (err, file){ 
      if (err) {
        console.error(err);
      }
      console.log(file.Case);
      
     increment = (n => {
        file.Case ++;
        return file.Case;
      });

      let ticket = increment();
      console.log(ticket);

// Write new json file

      let support_obj = {
        Case: ticket,
        Date: dateTime,
        Ticket: {
          Reporter: {
              id: reporter.id,
              username: reporter.username
          },
          Reported: {
              id: reported.id,
              username: reported.user.username
          },
          infringment: infringment
        }
      }

   let reportfile = jsonfile.writeFile(dir + '/' + ticket + '_' + reporter.username + '.json', support_obj, { spaces: 2 }, function (err){
    if (err) console.error(err);

    jsonfile.readFile(dir + '/' + ticket + '_' + reporter.username + '.json', function(err, file){
        if (err) console.error(err);
        console.log('Report written:');
        console.log(file);
        });

    const reportEmbed = new Discord.MessageEmbed()
        .setColor ('#ec5900')
        .setTitle (`#${ticket} - ${reporter.username}`)
        .addFields (
            { name: `User ${reported.user.username} was reported`, value: `**reason:** \n ${infringment}`, inline: true },
            { name: `User id: `, value: `${reported.id}`, inline: false },
            { name: `Report issued by`, value:`${reporter.username}`, inline: true },
            { name: `User id:`, value: `${reporter.id}`, inline: true },
        )
        .addField('Time of report (serverside)', dateTime)
        .setTimestamp()

    let reportlog = message.guild.channels.cache.find(c => c.name === "report-log");
    
    message.channel.send(`${reported.user.tag} was reported, our mod team will take a look. \n Thank you for letting us know!`);
    reportlog.send(reportEmbed);

      });
    });
  }); 
  

}

module.exports.help = {
  name: "report",
  description: "",
  authorization: "moderator"
}
