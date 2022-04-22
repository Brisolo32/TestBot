const { SlashCommandBuilder, channelMention } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("sudo")
        .setDescription("Sends a message pretending to be another user | Envia uma mensagem pretendendo ser outro usuário")
        .addUserOption(option =>
            option
            .setName("user")
            .setDescription("Define the user | Define o usuário")
            .setRequired(true))
        .addStringOption(option =>
            option
            .setName("message")
            .setDescription("Define the message | Define a mensagem")
            .setRequired(true)),
    async execute(interaction) {
        // Crie um webhook com o nome de usuario no "user" e o avatar do usuario no "avatar"
        const user = interaction.options.getUser("user");
        const message = interaction.options.getString("message");
        
        const webhook = await interaction.channel.createWebhook(user.username, {
            avatar: user.avatarURL(),
        });
        // Envie a mensagem no webhook
        await webhook.send(message);
        // delete the webhook 
        await webhook.delete();

        // Envie a mensagem no canal falando que o comando foi executado
        await interaction.reply({ content: `Message was successfully sent! | Mensagem enviada com sucesso!`, ephemeral: true });
    }
}