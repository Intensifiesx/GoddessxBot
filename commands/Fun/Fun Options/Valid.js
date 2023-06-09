export default {
  main: async function (interaction) {
    // Validate the user
    var res = [
      "You are right!",
      "Actually valid!",
      "TRUE!",
      "Yes, agreed!",
      "That's what I'm saying!",
      "EXACTLY!",
    ];

    await interaction.reply({
      content: `${interaction.user}, ${
        res[Math.floor(Math.random() * res.length)]
      }`,
    });
  },
};
