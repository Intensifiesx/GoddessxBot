import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    var links = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Server")
          .setURL("https://discord.gg/NbN4hs6")
          .setStyle(ButtonStyle.Link)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Paypal")
          .setURL("https://www.paypal.me/Intensifiesx")
          .setStyle(ButtonStyle.Link)
      );

    await interaction.reply({
      components: [links],
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .setTitle(
            ":information_source: **Creator Info** :information_source:"
          )
          .addFields(
            {
              name: "Contact Me",
              value:
                "Discord Username: `Intensifies#8584`\nDiscord Server: https://discord.gg/NbN4hs6",
            },
            {
              name: "Support Creator",
              value: "PayPal: https://www.paypal.me/Intensifiesx",
              inline: false,
            }
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
