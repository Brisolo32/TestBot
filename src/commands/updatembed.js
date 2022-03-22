const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('updates')
        .setDescription('Mostra as Patch-Notes da atualização recente | Shows the recent Patch-Notes for the bot'),
	  async execute (interaction) {
        const updatembed = new MessageEmbed()
            .setColor('#ffffff')
            .setAuthor({ name: 'Updates', iconURL: 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256' })
            .setDescription("Patch-Notes v1.9 EN-US\n\nNew Commands:\n/shutup: Tells the user to shut up\n/frickoff: Tells the user to frick off\n/fancytext: Makes your text look 𝓯𝓪𝓫𝓾𝓵𝓸𝓾𝓼\n/friendshipended: Friendship ended with X now Y is my best friend\n/morrepraga: DIE PLAGUE!\n/capybara: Added more images\n/randwikien: Added more wiki's (10 wiki's)\n\nBug-Fixes:\n/coinflip: Using coinflip crashes the bot\n\nPatch-Notes v1.9 PT-BR\n\nNovos Comandos:\n/fancytext: Faz o texto ficar 𝓯𝓪𝓫𝓾𝓵𝓸𝓼𝓸\n/friendshipended: Amizade terminada com X agora Y é meu melhor amigo\n/morrepraga: MORRE PRAGA!\n/capybara: Adicionou mais imagens\n/randwiki: Adicionou mais wiki's (10 wiki's)")
            .setFooter({ name: 'Brisolo32 | Copyleft 2021-2022 | v1.8', iconURL: 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256' })

        interaction.reply({ embeds: [updatembed] })

		}
};