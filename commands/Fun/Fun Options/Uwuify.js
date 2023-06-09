import { EmbedBuilder } from "discord.js";
import randColor from "../../RandColor.js";
import Uwuifier from "uwuifier";

export default {
  main: async function (interaction) {
    // Create uwuifier sentence structure
    var faces = interaction.options.getInteger("faces") / 10,
      actions = interaction.options.getInteger("actions") / 10,
      stutters = interaction.options.getInteger("stutters") / 10,
      uwuMsg = interaction.options.getString("sentence"),
      uwuifier = new Uwuifier({
        spaces: {
          faces: faces,
          actions: actions,
          stutters: stutters,
        },
        words: 1,
        exclamations: 1,
      });

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .setTitle("🧸 Uwuify 🧸")
          .setThumbnail(
            interaction.user.avatarURL({
              format: "png",
              dynamic: true,
              size: 512,
            })
          )
          .setDescription(
            `**Before:** ${uwuMsg}\n\n**After:** ${uwuifier.uwuifySentence(
              uwuMsg
            )}`
          )
          .setTimestamp()
          .setFooter({
            text: interaction.user.tag,
            iconURL: interaction.user.avatarURL(),
          }),
      ],
    });
  },
};
