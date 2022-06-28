const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("roll")
        .setDescription("The simplest die possible")
        .addStringOption(option =>
            option
            .setName('dice_type')
            .setDescription('The dice type')
            .setRequired(true)),
	  async execute (interaction) {
          const dicet = interaction.options.getString('dice_type')
          const dicen = dicet.split(/^\d?[D-d]/)

          if (dicet.match(/^\d[D-d]/)) interaction.reply({ content: 'Sorry! We still don\'t support this type of dice', ephemeral: true });
          else if (dicen[1] > 5000) interaction.reply({ content: 'At this point you\'re better off just using a ball. Try a number less than 5000', ephemeral: true});
          else if (dicet.match(/^(?!d)\w*/)) interaction.reply(`You ran a **d${dicet}** and got a **${generateNum(dicet)}**! :game_die:`).catch((e) => console.log(e))
          else interaction.reply(`You ran a **${dicet}** and got a **${generateNum(dicen[1])}**! :game_die:`).catch((e) => console.log(e))

          function generateNum(max) {
              return Math.round(Math.random() * (max - 1) + 1);
          }
      }
};
