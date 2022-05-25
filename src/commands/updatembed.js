const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { colours } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('updates')
        .setDescription('Shows the recent Patch-Notes for the bot'),
	  async execute (interaction) {
        const updatembed = new MessageEmbed()
            .setColor(`${colours.info}`)
            .setAuthor({ name: 'Updates', iconURL: 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256' })
            .setDescription(`**Patch-Notes EN-US**\n\n- /music play: plays the video/music from yt\n- /music queue: shows the queue\n- /music skip: skips the music\n- /music remove: removes a music/video from the queue\n- /music pause: pauses the music\n- /music resume: resumes the music\n- /music stop: stops the music\n- /pokesearch: sends a random pokemon or searches a pokemon\n- /poll: added the possibility to add more poll options\n- /gdbrowser leaderboard: shows the ACCURATE gd leaderboard\n- /gdbrowser icon: shows the account icon\n- /capybara: added more capybara images\n- /text: added a stupid \"japanese\" translator`)
            .setFooter({ text: 'Brisolo32 | Copyleft 2021-2022 | v2.1', iconURL: 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256' })

        interaction.reply({ embeds: [updatembed] })

		}
};
