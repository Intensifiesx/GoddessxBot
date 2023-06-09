import { PermissionsBitField } from "discord.js";

export default {
  main: async function (interaction) {
    var amount = interaction.options.getInteger("num"),
      msg;

    // If channel does not exist or member does not have perms, return error
    // prettier-ignore
    if (interaction.channel === null ||
      !interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers))
      msg = `${interaction.user}, you do not have the \`MANAGE_MESSAGES\` permission!`;
    // If amount is greater than 100, return error
    else if (amount >= 100) msg = `${interaction.user}, can't delete more than 99 messages at once!`;
    // If amount is less than 1, return error
    else if (amount < 1) msg = `${interaction.user}, must delete atleast 1 message!`;
    else {
      // Delete messages
      await interaction.channel.messages
        .fetch({ limit: amount })
        .then((messages) => interaction.channel.bulkDelete(messages))
        .catch((err) =>
          interaction.reply(
            `${interaction.user}, can't delete messages that are older than 14 days!`
          )
        );
      msg = `${amount} message(s) have been deleted!`; // Send messages deleted
    }

    await interaction.reply({
      content: `${msg}`,
      ephemeral: true,
    });
  },
};
