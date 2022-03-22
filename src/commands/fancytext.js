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

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fancytext')
        .setDescription('Faz o texto ficar 𝓯𝓪𝓫𝓾𝓵𝓸𝓼𝓸 | Makes the text look 𝓯𝓪𝓫𝓾𝓵𝓸𝓾𝓼')
        .addStringOption(option => 
            option
            .setName('string')
            .setDescription('Texto | Text')
            .setRequired(true)),
    async execute (interaction) {
        const string1 = interaction.options.getString('string');
        const text = string1;
        var result = text.replace(/[A-z]/g, matchedLetter => fancyText[matchedLetter])
        console.log(result);
        interaction.reply(`${result}`);
    }
}

