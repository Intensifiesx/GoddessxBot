import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    // If channel is null, return error
    if (interaction.channel === null || interaction.guild.bannerURL() === null)
      return interaction.reply({
        ephemeral: true,
        content: `${interaction.user}, this server does not have a banner!`,
      });

    var banner = interaction.guild.bannerURL({
        format: "png",
        dynamic: true,
        size: 512,
      }),
      link = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("Link")
          .setStyle(ButtonStyle.Link)
          .setURL(`${banner}`)
      );

    await interaction.reply({
      components: [link],
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .setAuthor(interaction.guild.name)
          .setImage(banner)
          .setTimestamp()
          .setFooter({
            text: interaction.user.tag,
            iconURL: interaction.user.avatarURL(),
          }),
      ],
    });
  },
};
