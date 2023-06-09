export default {
  main: async function (interaction) {
    var args = interaction.options.getString("sentence").split(/ +/);
    if (args.length === 1)
      return await interaction.reply(
        `${interaction.user}, please type a sentence or more than 1 word!`
      );

    var clap = "👏",
      string = " ",
      count = 0;

    // Clap emoji after each word
    while (count < args.length) string += args[count++] + " " + clap + " ";

    await interaction.reply(`${interaction.user}, ${string}`);
  },
};
