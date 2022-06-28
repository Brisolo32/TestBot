const { Configuration, OpenAIApi } = require('openai')
const { openaikey, colours } = require('../config.json')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const configuration = new Configuration({
    apiKey: openaikey
})
const openai = new OpenAIApi(configuration);


module.exports = {
    data: new SlashCommandBuilder()
        .setName('textgenerate')
        .setDescription('Generates text based on OpenAI\'s GPT-3')
        .addStringOption(option =>
            option
            .setName('prompt')
            .setDescription('The prompt')
            .setRequired(true)),
    async execute(interaction) {
        try {
            const prmpt = interaction.options.getString('prompt')
            const loadinge = new MessageEmbed()
                .setColor(`${colours.loading}`)
                .setTitle(`Loading <a:testbotassets_loadinggiff:966861157140946954>`)
            interaction.reply({ embeds: [loadinge] })

            const completion = await openai.createCompletion({
                model: "text-curie-001",
                prompt: prmpt,
                max_tokens: 512,
            })

            const response = new MessageEmbed()
                .setColor(`${colours.success}`)
                .setDescription(`Prompt: ${prmpt}\nReply: ${completion.data.choices[0].text}`)

            await interaction.editReply({ content: '_ _', embeds: [response] })
        } catch (e) {
            const errorembed = new MessageEmbed()
              .setTitle('Error')
              .setDescription(`Something went wrong...`)
              .addFields(
                { name: 'Log', value: `${e}` },
              )
              .setColor(`${colours.error}`)
              .setFooter({ text: `Contact the Dev at Brisolo32#2968` })
              .setTimestamp();
            console.error(e);
            await interaction.reply({ embeds: [errorembed], ephemeral: true });
        }
    }
}
