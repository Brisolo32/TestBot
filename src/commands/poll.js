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
            .setRequired(true))
        .addStringOption(option => option
            .setName('option3')
            .setDescription('Defina a 3ª Opção | Define the 3rd Option')
            .setRequired(false))
        .addStringOption(option => option
            .setName('option4')
            .setDescription('Defina a 4ª Opção | Define the 4th Option')
            .setRequired(false))
        .addStringOption(option => option
            .setName('option5')
            .setDescription('Defina a 5ª Opção | Define the 5th Option')
            .setRequired(false))
        .addStringOption(option => option
            .setName('option6')
            .setDescription('Defina a 6ª Opção | Define the 6th Option')
            .setRequired(false))
        .addStringOption(option => option
            .setName('option7')
            .setDescription('Defina a 7ª Opção | Define the 7th Option')
            .setRequired(false))
        .addStringOption(option => option
            .setName('option8')
            .setDescription('Defina a 8ª Opção | Define the 8th Option')
            .setRequired(false))
        .addStringOption(option => option
            .setName('option9')
            .setDescription('Defina a 9ª Opção | Define the 9th Option')
            .setRequired(false))
        .addStringOption(option => option
            .setName('option10')
            .setDescription('Defina a 10ª Opção | Define the 10th Option')
            .setRequired(false)),

	  async execute (interaction) {
        const pollname = interaction.options.getString('name');
        const polloption1 = interaction.options.getString('option1');
        const polloption2 = interaction.options.getString('option2');
        const pollembed = new MessageEmbed()
            .setColor('#ff0000')
            .setAuthor('Poll | Enquete', 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/party-popper_1f389.png')
            .setDescription(`${pollname}`)
        const message = await interaction.reply({ embeds: [pollembed], fetchReply: true });
        await message.react(polloption1)
        await message.react(polloption2)
        if (interaction.options.getString('option3')) {
            const polloption3 = interaction.options.getString('option3');
            await message.react(polloption3)
        }
        if (interaction.options.getString('option4')) {
            const polloption4 = interaction.options.getString('option4');
            await message.react(polloption4)
        }
        if (interaction.options.getString('option5')) {
            const polloption5 = interaction.options.getString('option5');
            await message.react(polloption5)
        }
        if (interaction.options.getString('option6')) {
            const polloption6 = interaction.options.getString('option6');
            await message.react(polloption6)
        }
        if (interaction.options.getString('option7')) {
            const polloption7 = interaction.options.getString('option7');
            await message.react(polloption7)
        }
        if (interaction.options.getString('option8')) {
            const polloption8 = interaction.options.getString('option8');
            await message.react(polloption8)
        }
        if (interaction.options.getString('option9')) {
            const polloption9 = interaction.options.getString('option9');
            await message.react(polloption9)
        }
        if (interaction.options.getString('option10')) {
            const polloption10 = interaction.options.getString('option10');
            await message.react(polloption10)
        }
		}
};