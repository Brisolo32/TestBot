const Canvas = require('canvas');
const {MessageAttachment, MessageEmbed} = require('discord.js');
const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tipoftheday')
        .setDescription('That TOTD like the one in Windows 95')
        .addStringOption(option =>
            option
            .setName('text')
            .setDescription('Text of the tip')
            .setRequired(true)),
    async execute(interaction) {
        const text = interaction.options.getString("text");

        const canvas = Canvas.createCanvas(899, 549);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('./assets/tipoftheday.png');

        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        
        const textSize = ctx.measureText(text);
        ctx.font = '25px Arial';
        ctx.fillStyle = '#000000';
        ctx.fillText(text, 100, canvas.height / 2);

        const attachment = new MessageAttachment(canvas.toBuffer(), 'tipoftheday.png');

        const tipoftheday = new MessageEmbed()
            .setImage('attachment://tipoftheday.png')

        interaction.reply({ embed: [tipoftheday], files: [attachment] });
    }
};        