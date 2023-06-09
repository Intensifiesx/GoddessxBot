import { EmbedBuilder } from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    var user = interaction.options.getUser("user") || interaction.user,
      specialCase = Math.random(),
      length = "=",
      pp = "";

    // If special case is less than 0.01, set length to long
    if (specialCase < 0.01) pp = "==========================================";
    // If special case is greater than 0.99, set length to short
    else if (specialCase > 0.99) pp = "";
    // Else, set pp to random length
    else
      for (var j = 0; j < Math.floor(Math.random() * 20) + 1; j++) pp += length;

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .addFields({
            name: `♂️ **PP Length** ♂️`,
            value: `${user}'s pp\n**8${pp}D**\n${
              specialCase < 0.01 || specialCase > 0.99
                ? "*Special Case (Less than 1% chance)!!*"
                : ""
            }`,
            inline: false,
          })
          .setThumbnail(user.avatarURL())
          .setTimestamp()
          .setFooter({
            text: interaction.user.tag,
            iconURL: interaction.user.displayAvatarURL(),
          }),
      ],
    });
  },
};
