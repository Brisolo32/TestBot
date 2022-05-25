const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { colours } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("about")
        .setDescription("Sobre o Bot"),
	  async execute (interaction) {
        const about = new MessageEmbed()
            .setColor(`${colours.info}`)
            .setAuthor({ name: 'Sobre o bot', iconURL: 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256' })
            .setDescription('EN-US\nBot Creator: Brisolo32#2968\nSome ideas: Sussy_Oreo#6827\nBig Help: StackOverflow\nGdBrowser: GDColon\nCapybara images: r/capybara')
            .setThumbnail('https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256')
            .setFooter({ text: 'Brisolo32 | Copyleft 2021-2022 | v2.1', iconURL: 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256' })

            interaction.reply({ embeds: [about] })
		}
};