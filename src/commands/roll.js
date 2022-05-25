const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("roll")
        .setDescription("The simplest die possible"),
	  async execute (interaction) {
        const Numbers = [
           "1 :game_die:",
           "2 :game_die:",
           "3 :game_die:",
           "4 :game_die:",
           "5 :game_die:",
           "6 :game_die:"
        ]

        const Die = Math.floor(Math.random() * Numbers.length)
        interaction.reply(Numbers[Die])
		}
};