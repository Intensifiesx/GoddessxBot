import { SlashCommandBuilder } from "@discordjs/builders";
import { reddit } from "../Reddit.js";

export default {
  data: new SlashCommandBuilder()
    .setName("pets")
    .setDescription("🐇 Cute pets to look at!")
    .addSubcommand((subcommand) =>
      subcommand.setName("bunny").setDescription("🐇 Sends a random bunny!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("cat").setDescription("🐇 Sends a random cat!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("cute").setDescription("🐇 Sends a random cute image!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("dog").setDescription("🐇 Sends a random dog!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("ferret").setDescription("🐇 Sends a random ferret!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("fox").setDescription("🐇 Sends a random fox!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("frog").setDescription("🐇 Sends a random frog!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("hamster").setDescription("🐇 Sends a random hamster!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("snake").setDescription("🐇 Sends a random snake!")
    ),
  async execute(interaction) {
    try {
      var command = interaction.options.getSubcommand(),
        subTable = {
          bunny: "Rabbits",
          cat: "Cats",
          cute: "Aww",
          dog: "DogPictures",
          ferret: "Ferrets",
          fox: "Foxes",
          frog: "Frogs",
          hamster: "Hamsters",
          snake: "Snakes",
        };

      reddit(subTable[command], interaction);
    } catch (err) {
      console.log(err);
    }
  },
};
