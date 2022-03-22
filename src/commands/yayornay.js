const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
        // marcando isso pq eu sou trouxa. pqp mto burro coloquei o ngc de outro comando aqui AAAAAAAAAAAAAAA
        data: new SlashCommandBuilder()
                .setName("yayornay")
                .setDescription("Make a question and it will answer you if it is yay or nay")
                .addStringOption(option => 
                    option
                    .setName('input')
                    .setDescription('Make a question (that can be answered with a yes or no)')
                    .setRequired(true)),
	async execute (interaction) {
		const Josefe = [
            "Maybe",
            "No",
            "Nah mate",
            "Of course, no",
            "Probably No",
            "Negative",
            "Not at all",
            "Yeah mate",
            "Probably Yes",
            "Yes",
            "Positive",
            "Of course, yes",
            "Affirmative",
            "Aye",
            "Your answer is in wyoming... so it doesn't exist",
            "I'm not sure",
            "Nginx 404 Bad request",
            "I'll say it to you just let me do this thing",
            "YES A NEW PB!, oh you think i meant this for you then you're wrong",
            "NO A DNF!, oh you think i meant this for you then you're wrong"
    	]
    	const string = interaction.options.getString('input');
    	const Resposta = Math.floor(Math.random() * Josefe.length);
    	await interaction.reply(`P: ${string}\nR: ` + Josefe[Resposta]);
	}
};