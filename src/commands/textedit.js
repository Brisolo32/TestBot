const { SlashCommandBuilder } = require("@discordjs/builders");

const fancyText = {
    A: "ð", B: "ð", C: "ð", D: "ð", E: "ð", F: "ð", G: "ð", 
    H: "ð", I: "ð", J: "ð", K: "ð", L: "ð", M: "ð", N: "ð",
    O: "ð", P: "ð", Q: "ð ", R: "ð¡", S: "ð¢", T: "ð£", U: "ð¤",
    V: "ð¥", W: "ð¦", X: "ð§", Y: "ð¨", Z: "ð©",
    a: "ðª", b: "ð«", c: "ð¬", d: "ð­", e: "ð®", f: "ð¯", g: "ð°",
    h: "ð±", i: "ð²", j: "ð³", k: "ð´", l: "ðµ",  m: "ð¶", n: "ð·",
    o: "ð¸", p: "ð¹", q: "ðº", r: "ð»", s: "ð¼", t: "ð½", u: "ð¾",
    v: "ð¿", w: "ð", x: "ð", y: "ð", z: "ð"
};
const aesthetic = {
    A: "ï¼¡", B: "ï¼¢", C: "ï¼£", D: "ï¼¤", E: "ï¼¥", F: "ï¼¦", G: "ï¼§", 
    H: "ï¼¨", I: "ï¼©", J: "ï¼ª", K: "ï¼«", L: "ï¼¬", M: "ï¼­", N: "ï¼®",
    O: "ï¼¯", P: "ï¼°", Q: "ï¼±", R: "ï¼²", S: "ï¼³", T: "ï¼´", U: "ï¼µ",
    V: "ï¼¶", W: "ï¼·", X: "ï¼¸", Y: "ï¼¹", Z: "ï¼º",
    a: "ï½", b: "ï½", c: "ï½", d: "ï½", e: "ï½", f: "ï½", g: "ï½",
    h: "ï½", i: "ï½", j: "ï½", k: "ï½", l: "ï½",  m: "ï½", n: "ï½",
    o: "ï½", p: "ï½", q: "ï½", r: "ï½", s: "ï½", t: "ï½", u: "ï½",
    v: "ï½", w: "ï½", x: "ï½", y: "ï½", z: "ï½"
};
const thatsnotjapanese = {
    A: "Ka", B: "Zu", C: "Mi", D: "Te", E: "Ku", F: "Lu", G: "Ji", 
    H: "Ri", I: "Ki", J: "Zus", K: "Me", L: "Ta", M: "Rin", N: "To",
    O: "Mo", P: "No", Q: "Ke", R: "Shi", S: "Ari", T: "Chi", U: "Do",
    V: "Ru", W: "Mei", X: "Na", Y: "Fu", Z: "Zi",
    a: "ka", b: "zu", c: "mi", d: "te", e: "ku", f: "lu", g: "ji",
    h: "ri", i: "ki", j: "zus", k: "me", l: "ta",  m: "rin", n: "to",
    o: "mo", p: "no", q: "ke", r: "shi", s: "ari", t: "chi", u: "do",
    v: "ru", w: "mei", x: "na", y: "fu", z: "zi",
    // AMEM COPILOT DEUS TE ABENÃOE
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("textedit")
        .setDescription("Makes your text look different")
        .addSubcommand(subcommand => 
            subcommand
            .setName('fancy')
            .setDescription('ð£ð±ð® ðºð¾ð²ð¬ð´ ð«ð»ð¸ðð· ð¯ð¸ð ð³ð¾ð¶ð¹ð¼ ð¸ð¿ð®ð» ð½ð±ð® ðµðªðð ð­ð¸ð°')
            .addStringOption(option => option.setName("text").setDescription("Text"))
            )
        .addSubcommand(subcommand => 
            subcommand
            .setName('aesthetic')
            .setDescription('ï¼´ï½ï½ ï½ï½ï½ï½ï½ ï½ï½ï½ï½ï½ ï½ï½ï½ ï½ï½ï½ï½ï½ ï½ï½ï½ï½ ï½ï½ï½ ï½ï½ï½ï½ ï½ï½ï½')
            .addStringOption(option => option.setName("text").setDescription("Text"))
            )
        .addSubcommand(subcommand => 
            subcommand
            .setName('notjapanese')
            .setDescription('Meirikachi chiriku kamichidokata rikutata kiari chirikiari')
            .addStringOption(option => option.setName("text").setDescription("Text"))
            )
        .addSubcommand(subcommand => 
            subcommand
            .setName('randomcaps')
            .setDescription('thE quICK BRown FoX juMpEd OVEr thE lAZy doG')
            .addStringOption(option => option.setName("text").setDescription("Text"))
            ),
        async execute(interaction) {
            if (interaction.options.getSubcommand() === "fancy") {
                const string1 = interaction.options.getString('text');
                const text = string1;
                var result = text.replace(/[A-z]/g, matchedLetter => fancyText[matchedLetter])
                interaction.reply(`${result}`);
            } else if (interaction.options.getSubcommand() === "aesthetic") {
                const string1 = interaction.options.getString('text')
                const text = string1;
                var result = text.replace(/[A-z]/g, matchedLetter => aesthetic[matchedLetter])
                interaction.reply(`${result}`);
            } else if (interaction.options.getSubcommand() === "notjapanese") {
                const string1 = interaction.options.getString('text')
                const text = string1;
                var result = text.replace(/[A-z]/g, matchedLetter => thatsnotjapanese[matchedLetter])
                interaction.reply(`${result}`);
            } else if (interaction.options.getSubcommand() === "randomcaps") {
                const string1 = interaction.options.getString('text')
                const text = string1;
                const rndCaps = text.toLowerCase().split('').map(c => Math.random() < 0.5 ? c : c.toUpperCase()).join('');
                interaction.reply(`${rndCaps}`);
            }
        }
}