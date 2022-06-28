const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const Canvas = require('canvas');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('messagebox')
        .setDescription('Sends a windows looking message box')
        .addStringOption(option =>
            option
            .setName('input')
            .setDescription('The message that you want to appear')
            .setRequired(true)),
    async execute(interaction) {
        const string = interaction.options.getString('input');
        const username = interaction.user.username;

        const canvas = Canvas.createCanvas(561, 130);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('./assets/messagebox.png');

        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.font = "20px Arial";
        ctx.fillStyle = '#000000';
        ctx.fillText(string, 53, 65);

        ctx.fillStyle = '#ffffff';
        ctx.fillText(username, 10, 23);
        
        const attachment = new MessageAttachment(canvas.toBuffer(), 'morre-praga.png');

        const morrepraga = new MessageEmbed()
              .setImage('attachment://profile-image.png')

        interaction.reply({ embed: [morrepraga], files: [attachment] });

    }
}