const Canvas = require('canvas')
const { MessageAttachment, MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');

	let fontSize = 70;

	do {
		context.font = `${fontSize -= 10}px sans-serif`;
	} while (context.measureText(text).width > canvas.width - 300);

	return context.font;
};

module.exports = {

	data: new SlashCommandBuilder()
		.setName('friendship')
		.setDescription('Amizade terminada com X agora Y é meu melhor amigo | Friendship ended with X now Y is my best friend')
		.addUserOption(option => 
			option
			.setName('user1')
			.setDescription('Amizade terminada com quem? | Friendship ended with who?')
			.setRequired(true))
		.addUserOption(option => 
			option
			.setName('user2')
			.setDescription('Agora quem é seu melhor amigo? | Now who is your best friend?')
			.setRequired(true)),
	async execute (interaction) {
            // Essential stuff to make this shit work
            const user1 = interaction.options.getMember("user1");
            const user2 = interaction.options.getMember("user2");

            // Canvas
            let fontSize = 70;
            const canvas = Canvas.createCanvas(719, 539);
            const ctx = canvas.getContext('2d');
            const avatar1 = await Canvas.loadImage(user1.user.displayAvatarURL({ format: 'jpg' }));
            const avatar2 = await Canvas.loadImage(user2.user.displayAvatarURL({ format: 'jpg' }));
			const commanduser = await Canvas.loadImage(interaction.user.displayAvatarURL({ format: 'jpg' }))
            const background = await Canvas.loadImage('./assets/friendship.png');
			const friendshipX = await Canvas.loadImage('./assets/friendshipx.png')
    
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            
			// Texts
			// Draws the "user1" username in comic sans
            ctx.font = "43px Comic Sans MS";
			ctx.fillStyle = '#000000';
	        ctx.fillText(user1.user.username, 475, 60);

			// Draws the "user2" username in comic sans
			ctx.font = "30px Comic Sans MS";
			ctx.fillStyle = '#000000';
			ctx.fillText(user2.user.username, 280, 190)

			// Images
			// Inserts the "user1", "user2" and "command user" pfp
			ctx.drawImage(avatar1, 0, 290, 180, 260)
			ctx.drawImage(avatar1, 500, 320, 220, 220)
			ctx.drawImage(avatar2, 450, 140, 135, 135)
			ctx.drawImage(commanduser, 130, 78, 135, 135)

			// drawing the X in the one who is hated lol
			ctx.drawImage(friendshipX, 0, 0)

            const attachment = new MessageAttachment(canvas.toBuffer(), 'friendship-ended.png');
        
            const friendshipended = new MessageEmbed()
                  .setImage('attachment://profile-image.png')

            interaction.reply({ embed: [friendshipended], files: [attachment] });
		}
};