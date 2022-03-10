const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('updates')
        .setDescription('Mostra as Patch-Notes da atualização recente | Shows the recent Patch-Notes for the bot'),
	  async execute (interaction) {
        const updatembed = new MessageEmbed()
            .setColor('#ffffff')
            .setAuthor('Updates', 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256')
            .setDescription('Patch-Notes v1.7 EN-US:\n\n/randwikien: added more wikis\n/poll: creates a poll\n/capybara: added more capybara images\n\nPatch-Notes v1.7 PT-BR\n\n/randwiki: adicionou mais wikis\n/poll: cria uma enquete\n/capybara adicionou mais imagens de capivara')
            .setFooter("Brisolo32 | Copyleft 2021-2022 | v1.7", "https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256")
        
        interaction.reply({ embeds: [updatembed] })

		}
};