import { EmbedBuilder, PermissionsBitField } from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    var duration = interaction.options.getInteger("num"),
      embed = new EmbedBuilder()
        .setColor(randColor())
        .setAuthor({
          name: `${interaction.user.tag}`,
          iconURL: interaction.user.avatarURL(),
        })
        .setTimestamp();

    // If channel is null, member does not have perms or duration is 0, return error
    // prettier-ignore
    if (interaction.channel === null ||
      (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels) && duration > 0))
      return interaction.reply({
        content: `${interaction.user}, you do not have permission to change slowmode! \`(Must have MANAGE_CHANNELS permission)\``,
        ephemeral: true,
      });
    // If bot does not have perms to change slowmode, return error
    else if (!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.ManageChannels) &&
      duration > 0)
      return interaction.reply({
        content: `${interaction.user}, I do not have permission to change slowmode! \`(Must have MANAGE_CHANNELS permission)\``,
        ephemeral: true,
      });
    // If duration is less than 0 or greater than 21600 seconds, return error
    else if (!(duration >= 0 && duration <= 21600))
      return await interaction.reply({
        content: `${interaction.user}, duration must be between 0 to 21600 seconds!`,
        ephemeral: true,
      });
    // If duration is 0, set slowmode to 0
    else if (duration || duration === 0) {
      interaction.channel.setRateLimitPerUser(duration);
      embed.setDescription(
        `${interaction.user} has set this channel slowmode to **${duration} seconds!**`
      );
      await interaction.reply({
        embeds: [embed],
      });
    // Else show current slowmode
    } else {
      embed.setDescription(
        `Slowmode is currently set to **${interaction.channel.rateLimitPerUser} seconds!**`
      );
      await interaction.reply({
        embeds: [embed],
      });
    }
  },
};
