import { SlashCommandBuilder } from "@discordjs/builders";
import { reddit } from "../Reddit.js";

export default {
  data: new SlashCommandBuilder()
    .setName("memes")
    .setDescription("😂 Funny memes to look at!")
    .addSubcommand((subcommand) =>
      subcommand.setName("meme").setDescription("😂 Sends random memes!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("animememe")
        .setDescription("😂 Sends random anime memes!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("jojomeme")
        .setDescription("😂 Sends random jojo memes!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("mcmeme")
        .setDescription("😂 Sends random minecraft memes!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("purememe")
        .setDescription("😂 Sends random wholesome memes!")
    ),
  async execute(interaction) {
    try {
      // prettier-ignore
      switch (interaction.options.getSubcommand()) {
        case "meme": return reddit("memes", interaction);
        case "animememe": return reddit(Math.random() > 0.5 ? "animememes" : "Animemes", interaction);
        case "jojomeme": return reddit("ShitPostCrusaders", interaction);
        case "mcmeme": return reddit("minecraftmemes", interaction);
        case "purememe": return reddit("WholesomeMemes", interaction);
      }
    } catch (err) {
      console.log(err);
    }
  },
};
