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
            .setDescription("Patch Notes 2.0 EN-US\n\n/echo: Sends a message pretending to be another user\n/text: Grouped all of them into one command and also added another/gdbrowser: Added a GD search engine\n/tipoftheday: That TOTD like the one in Windows 95\n/avatar: Sends the user profile\n/yayornay: Made it look better\n/messagebox: Sends a message box like the one in Windows XP\n/capybara: Added more capybara images (already lost count ;-;)\n\nPatch Notes 2.0 PT-BR\n/echo: Envia uma mensagem pretendendo ser um outro user\n/tipoftheday: Aquela mensagem de TOTD tipo do Windows 95\n/avatar: Envia a foto de perfil do usuário\n/simounao: Deixou mais bonito\n/messagebox: Envia uma caixa de mensagem tipo a do Windows XP\n/capybara: Adicionou mais imagens (ja perdi a conta ;-;)\n/text: Agrupou todos em um e tambem adicionou outro")
            .setFooter({ text: 'Brisolo32 | Copyleft 2021-2022 | v1.8', iconURL: 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256' })

        interaction.reply({ embeds: [updatembed] })

		}
};