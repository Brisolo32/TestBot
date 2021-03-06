const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { colours } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Shows the avatar of a user")
        .addUserOption(option => 
            option
            .setName("user")
            .setDescription("The user")
            .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getMember("user");

        const avatar = new MessageEmbed()
            .setTitle(`Avatar of ${user.user.username}`)
            .setImage(`${user.user.displayAvatarURL({ format: "png" })}`)
            .setFooter({ text: `${user.user.tag}`, iconURL: `${user.user.displayAvatarURL({ format: "png" })}` })
            .setColor(`${colours.success}`);

        interaction.reply({ embeds: [avatar] });
    }
};
