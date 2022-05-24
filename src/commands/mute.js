const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Mutes a user')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user that you want to mute')
                .setRequired(true))
        .addIntegerOption(option =>
            option
                .setName('time')
                .setDescription('The time in minutes for the mute')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('The reason for the mute')),
    async execute(interaction) {
        const usertag = interaction.options.getUser("user");
        const userid = interaction.guild.members.cache.get(usertag.id);

        const time = interaction.options.getInteger("time");
        const reason = interaction.options.getString("reason");

        const duration = time * 60000;

        if (!interaction.member.permissions.has("MODERATE_MEMBERS")) {
            interaction.reply({ content: "You don't have the permissions to do this!", ephemeral: true });
        } else {
            const mutedEmbed = new MessageEmbed()
                .setColor("#c20000")
                .setTitle("Muted")
                .setDescription("You have been muted")
                .addFields(
                    { name: "Reason", value: `${reason}` },
                    { name: "Duration", value: `${time} Minutes` },
                    { name: "Mod who muted", value: `${interaction.member}` },
                )

            if (!userid) {
                interaction.reply({ content: "The user isn't in the server", ephemeral: true });
            } else if (!duration) {
                interaction.reply({ content: "You need to specify a valid time", ephemeral: true });
            } else {
                userid.timeout(duration, reason).then(() => {
                    interaction.reply(`${usertag} has been muted for ${time} minute(s) for ${reason}`);
                    userid.send({ embeds: [mutedEmbed] });
                })
            }
        }
        
    }
}