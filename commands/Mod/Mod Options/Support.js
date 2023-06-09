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
        .setURL("https://discord.gg/NbN4hs6")
    );

    await interaction.reply({
      components: [link],
      embeds: [
        new EmbedBuilder()
          .setTitle("ℹ️ Support Server ℹ️")
          .setDescription(
            "*Click the button below to\njoin our `Support Server`!*"
          )
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
