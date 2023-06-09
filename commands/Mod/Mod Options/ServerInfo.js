import { EmbedBuilder } from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    // If channel is null, return error
    if (interaction.channel === null)
      return interaction.reply(
        `${interaction.user}, there is no info for this server!`
      );

    // Get server info
    var totalMembers = interaction.client.guilds.cache.get(
        interaction.guild.id
      ).memberCount,
      totalChannels = interaction.guild.channels.cache.size,
      totalEmojis = interaction.guild.emojis.cache.size,
      totalRoles = interaction.guild.roles.cache.size,
      guildCreated = interaction.guild.createdAt.toLocaleString(),
      guildOwner = interaction.guild.ownerId,
      guildName = interaction.guild.name;

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .setTitle(guildName)
          .setDescription(`**Owner:** <@${guildOwner}>`)
          .addFields(
            { name: "**Members**", value: `${totalMembers}`, inline: true },
            { name: "**Channels**", value: `${totalChannels}`, inline: true },
            { name: "**Emojis**", value: `${totalEmojis}`, inline: true },
            { name: "**Roles**", value: `${totalRoles}`, inline: true },
            { name: "**Created**", value: `${guildCreated}`, inline: true },
            { name: "‎", value: `‎`, inline: true }
          )
          .setThumbnail(
            interaction.guild.iconURL({
              format: "png",
              dynamic: true,
              size: 256,
            })
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
