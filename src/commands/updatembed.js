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
            .setDescription(`**Patch-Notes EN-US**\n\n- /music play: plays the video/music from yt\n- /music queue: shows the queue\n- /music skip: skips the music\n- /music remove: removes a music/video from the queue\n- /music pause: pauses the music\n- /music resume: resumes the music\n- /music stop: stops the music\n- /pokesearch: sends a random pokemon or searches a pokemon\n- /poll: added the possibility to add more poll options\n- /gdbrowser leaderboard: shows the ACCURATE gd leaderboard\n- /gdbrowser icon: shows the account icon\n- /capybara: added more capybara images\n- /text: added a stupid \"japanese\" translator \n \n**Patch-Notes PT-BR**\n\n- /music play: toca musica do youtube\n- /music queue: mostra a fila\n- /music skip: pula a musica\n- /music remove: remove uma musica da fila\n- /music pause: pausa a musica\n- /music resume: resume a musica\n- /music stop: para a musica\n- /pokesearch: mostra um pokemon aleatorio ou pesquisa um pokemon\n- /poll: adicionou a possiblilidade de mais opções de enquete\n- /capybara: adicionou mais imagens de capivara\n- /text: adicionou um estupido tradutor de \"japones\"`)
            .setFooter({ text: 'Brisolo32 | Copyleft 2021-2022 | v2.1', iconURL: 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256' })

        interaction.reply({ embeds: [updatembed] })

		}
};
