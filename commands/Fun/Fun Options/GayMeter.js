import { EmbedBuilder } from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    var user = interaction.options.getUser("user") || interaction.user;

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .setTitle(":rainbow_flag: **Gay Meter** :rainbow_flag:")
          .setDescription(`${user} is ${Math.floor(Math.random() * 101)}% gay`)
          .setThumbnail(
            user.avatarURL({ format: "png", dynamic: true, size: 512 })
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
