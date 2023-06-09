import { EmbedBuilder } from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    // If channel is null, return error
    if (interaction.channel === null)
      return interaction.reply(
        `${interaction.user}, there is no info for this server!`
      );

    var member = interaction.options.getUser("user") || interaction.user,
      guildMember = interaction.options.getMember("user") || interaction.member,
      created = member.createdAt,
      joined = guildMember.joinedAt,
      roles = guildMember.roles.cache.map((r) => `${r}`).join(" | ");

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .setAuthor({ name: `${member.tag}`, iconURL: member.avatarURL() })
          .addFields(
            {
              name: "**User:**",
              value: `${member}`,
              inline: true,
            },
            { name: "**User ID:**", value: `${member.id}`, inline: true },
            { name: "‎", value: `‎`, inline: false },
            { name: "**Created On:**", value: `${created}`, inline: true },
            { name: "**Joined At:**", value: `${joined}`, inline: true },
            { name: "**Roles:**", value: `${roles}`, inline: false }
          )
          .setThumbnail(
            member.avatarURL({
              format: "png",
              dynamic: true,
              size: 512,
            })
          ),
      ],
    });
  },
};
