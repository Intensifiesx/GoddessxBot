import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    await interaction.reply({
      components: [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setLabel("Link")
            .setStyle(ButtonStyle.Link)
            .setURL(
              "https://discord.com/oauth2/authorize?client_id=625628505954189322&permissions=2147871814&scope=bot%20applications.commands"
            )
        ),
      ],
      embeds: [
        new EmbedBuilder()
          .setTitle("✉️ Invite Goddessx ✉️")
          .setDescription("*Click the button below to\nadd `Goddessx`!*")
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
