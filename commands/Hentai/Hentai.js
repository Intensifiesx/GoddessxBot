import { SlashCommandBuilder } from "@discordjs/builders";
import { reddit } from "./../Reddit.js";

export default {
  data: new SlashCommandBuilder()
    .setName("h")
    .setDescription("🐙 Hanime options!")
    .addSubcommand((subcommand) =>
      subcommand.setName("hanime").setDescription("🐙 Sends hanime!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("2b").setDescription("🐙 Sends 2B!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("booty")
        .setDescription("🐙 Sends booty!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("head").setDescription("🐙 Sends some head!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("darkskinned")
        .setDescription("🐙 Sends dark skinned!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("futa").setDescription("🐙 Sends futa!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("mommy").setDescription("🐙 Sends mommy!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("monstergirl")
        .setDescription("🐙 Sends monster girl!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("thighs")
        .setDescription("🐙 Sends thighs!")
    ),
  async execute(interaction) {
    var command = interaction.options.getSubcommand(),
      nsfw = true,
      subTable = {
        hanime: "Hentai",
        booty: "AnimeBooty",
        "2b": "2Booty",
        head: "OralHentai",
        darkskinned: "KuroiHada",
        futa: "Futanari",
        mommy: "AnimeMILFs",
        monstergirl: "MonsterGirl",
        thighs: "Thighdeology",
      };

    reddit(subTable[command], interaction, nsfw).catch(console.error);
  },
};
