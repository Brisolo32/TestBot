const { SlashCommandBuilder } = require('@discordjs/builders');

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
        const message = await interaction.reply({ content: `${pollname}`, fetchReply: true });
        message.react(polloption1)
        message.react(polloption2)
		}
};