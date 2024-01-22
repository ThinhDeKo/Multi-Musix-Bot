const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [RTX](https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A)**\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
        // Music commands category
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `history`,`volume`,`pause`,`resume`,`247`',
          inline: true,
        },
        //fun category
        {
          name: '▶️  Fun',
          value: ' `ascii`, `joke`, `meme`, `roll`, `animecommands`',
          inline: true,
        },
        //image category
        {
          name: '▶️  Image',
          value: '`cat`, `dog`, `panda`',
          inline: true,
        },
        //anime category
        {
          name: '▶️  Anime',
          value: '`hug`, `slap`, `pat`, `kiss`',
          inline: true,
        },
        // Utility commands category
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`, `clear`, `uptime`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/985425793716977684/1001405320259711047/samurai.jpg?ex=65b8b2e1&is=65a63de1&hm=f3794d131218b4d79a941c37df813af8668c04ad2b795e20d5bcc75ed8c8e872&`);

    const button1 = new ButtonBuilder()
        .setLabel("TikTok")
        .setURL("https://www.tiktok.com/@m.setups")
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel("Discord")
        .setURL("https://discord.gg/s2eH4vxd")
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel("Code")
        .setURL("https://replit.com/@BEASTGAMERS1?tab=community")
        .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
