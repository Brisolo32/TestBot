const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Cria uma enquete automaticamente | Creates a poll automaticaly')
        .addStringOption(option =>
            option
            .setName('name')
            .setDescription('Defina a pergunta da enquete | Define the question of the poll')
            .setRequired(true))
        .addStringOption(option => option
            .setName('option1')
            .setDescription('Defina a 1ª Opção | Define the 1st Option')
            .setRequired(true))
        .addStringOption(option => option
            .setName('option2')
            .setDescription('Defina a 2ª Opção | Define the 2nd Option')
            .setRequired(true)),
	  async execute (interaction) {
        const pollname = interaction.options.getString('name');
        const polloption1 = interaction.options.getString('option1');
        const polloption2 = interaction.options.getString('option2');
        const pollembed = new MessageEmbed()
            .setColor('#ff0000')
            .setAuthor('Poll | Enquete', 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/party-popper_1f389.png')
            .setDescription(`${pollname}`)
        const message = await interaction.reply({ embeds: [pollembed], fetchReply: true });
        message.react(polloption1)
        message.react(polloption2)
		}
};