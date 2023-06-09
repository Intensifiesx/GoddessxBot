import { EmbedBuilder } from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    var arr = ["Heads", "Tails"],
      rand = Math.floor(Math.random() * arr.length);

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .setTitle("Coin landed on:")
          .setDescription(arr[rand])
          .setThumbnail(
            rand === 1 // If rand is 1, then set to tails else heads
              ? "https://imgur.com/8MtJc1R.png"
              : "https://imgur.com/jTGm7MF.png"
          )
          .setTimestamp()
          .setFooter({
            text: interaction.user.tag,
            iconURL: interaction.user.displayAvatarURL(),
          }),
      ],
    });
  },
};
