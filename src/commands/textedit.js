const { SlashCommandBuilder } = require("@discordjs/builders");

const fancyText = {
    A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", 
    H: "𝓗", I: "𝓘", J: "𝓙", K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝",
    O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣", U: "𝓤",
    V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
    a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰",
    h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵",  m: "𝓶", n: "𝓷",
    o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾",
    v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
};
const aesthetic = {
    A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", 
    H: "Ｈ", I: "Ｉ", J: "Ｊ", K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ",
    O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ", U: "Ｕ",
    V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ",
    a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ",
    h: "ｈ", i: "ｉ", j: "ｊ", k: "ｋ", l: "ｌ",  m: "ｍ", n: "ｎ",
    o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ", u: "ｕ",
    v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ"
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName("textedit")
        .setDescription("Faz o seu texto ficar diferente | Makes your text look different")
        .addSubcommand(subcommand => 
            subcommand
            .setName('fancy')
            .setDescription('𝓣𝓱𝓮 𝓺𝓾𝓲𝓬𝓴 𝓫𝓻𝓸𝔀𝓷 𝓯𝓸𝔁 𝓳𝓾𝓶𝓹𝓼 𝓸𝓿𝓮𝓻 𝓽𝓱𝓮 𝓵𝓪𝔃𝔂 𝓭𝓸𝓰')
            .addStringOption(option => option.setName("text").setDescription("Texto | Text"))
            )
        .addSubcommand(subcommand => 
            subcommand
            .setName('aesthetic')
            .setDescription('Ｔｈｅ ｑｕｉｃｋ ｂｒｏｗｎ ｆｏｘ ｊｕｍｐｓ ｏｖｅｒ ｔｈｅ ｌａｚｙ ｄｏｇ')
            .addStringOption(option => option.setName("text").setDescription("Texto | Text"))
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
            }
        }
}