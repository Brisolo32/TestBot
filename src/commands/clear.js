const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clears messages automatically')
        .addIntegerOption(option =>
            option
            .setName('amount')
            .setDescription('The amount of messages to delete')
            .setRequired(true)),
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount')
        const channel = interaction.channel

        const { size } = await channel.bulkDelete(amount, true)

        interaction.reply(`Deleted ${size} message(s)`)
    }
}
