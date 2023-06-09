import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    var link = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Link")
        .setStyle(ButtonStyle.Link)
        .setURL("https://top.gg/bot/625628505954189322/vote")
    );

    await interaction.reply({
      components: [link],
      embeds: [
        new EmbedBuilder()
          .setTitle("📪 Vote for Goddessx 📪")
          .setDescription("*Click the button below to\n`Vote for me`!*")
          .setThumbnail(
            interaction.client.user.displayAvatarURL({
              format: "png",
              dynamic: true,
              size: 512,
            })
          )
          .setTimestamp()
          .setColor(randColor())
          .setFooter({
            text: interaction.user.tag,
            iconURL: interaction.user.displayAvatarURL(),
          }),
      ],
    });
  },
};
