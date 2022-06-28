const { SlashCommandBuilder } = require('@discordjs/builders');

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
        const userTag = interaction.options.getUser("user");
        const userId = interaction.guild.members.cache.get(userTag.id);
        
        const reason = interaction.options.getString("reason");
        if (!interaction.member.permissions.has("MODERATE_MEMBERS")) {
            interaction.reply({ content: "You don't have the permissions to do this!", ephemeral: true });
        } else {
            if (!userId) {
                interaction.reply({ content: "The user isn't in the server", ephemeral: true });
            } else if (userId.kickable === false) {
                interaction.reply({ content: "I can't kick this user", ephemeral: true });
            } else {
                userId.kick(reason).then(() => {
                    interaction.reply(`${userTag} has been kicked, Reason: ${reason}`);
                });
            }
        }
        
    }
}