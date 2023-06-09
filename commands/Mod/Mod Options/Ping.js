import { EmbedBuilder } from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .setTitle(`🌐 Ping 🌐`)
          .addFields({
            name: "Bot Latency:",
            value: `${Math.round(interaction.client.ws.ping)}ms`,
            inline: true,
          })
          .setTimestamp(),
      ],
    });
  },
};
