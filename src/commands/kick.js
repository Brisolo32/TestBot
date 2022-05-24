const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a user from the server')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user that you want to kick')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('The reason for the kick')),
    async execute(interaction) {
        const usertag = interaction.options.getUser("user");
        const userid = interaction.guild.members.cache.get(usertag.id);
        
        const reason = interaction.options.getString("reason");
        if (!interaction.member.permissions.has("MODERATE_MEMBERS")) {
            interaction.reply({ content: "You don't have the permissions to do this!", ephemeral: true });
        } else {
            if (!userid) {
                interaction.reply({ content: "The user isn't in the server", ephemeral: true });
            } else if (userid.kickable = false) {
                interaction.reply({ content: "I can't kick this user", ephemeral: true });
            } else {
                userid.kick(reason).then(() => {
                    interaction.reply(`${usertag} has been kicked, Reason: ${reason}`);
                });
            }
        }
        
    }
}