const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("about")
        .setDescription("Sobre o Bot | About the bot"),
	  async execute (interaction) {
        const about = new MessageEmbed()
            .setColor('#ffffff')
            .setAuthor({ name: 'Sobre o bot | About the bot', iconURL: 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256' })
            .setDescription('EN-US\nBot Creator: Brisolo32#2968\nSome ideas: Sussy_Oreo#6827\nBig Help: StackOverflow\nGdBrowser: GDColon\n\nPT-BR\nCriador do bot: Brisolo32#2968\nAlgumas ideias: Sussy_Oreo#6827\nAjuda pra caralho: StackOverflow\nGdBrowser: GDColon')
            .setThumbnail('https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256')
            .setFooter({ text: 'Brisolo32 | Copyleft 2021-2022 | v1.9', iconURL: 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256' })

            interaction.reply({ embeds: [about] })
		}
};