import { SlashCommandBuilder } from "@discordjs/builders";
import { reddit } from "../Reddit.js";

export default {
  data: new SlashCommandBuilder()
    .setName("foods")
    .setDescription("🍪 Tasty food to look at!")
    .addSubcommand((subcommand) =>
      subcommand.setName("food").setDescription("🍪 Sends random food images!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("baking")
        .setDescription("🍪 Sends random baking images!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("burger")
        .setDescription("🍪 Sends random burger images!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("dessert")
        .setDescription("🍪 Sends random dessert images!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("healthy")
        .setDescription("🍪 Sends random healthy food images!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("pizza")
        .setDescription("🍪 Sends random pizza images!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("recipe")
        .setDescription("🍪 Sends random food recipes!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("oddfood")
        .setDescription("🍪 Sends random odd looking food images!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("steak")
        .setDescription("🍪 Sends random steak images!")
    ),
  async execute(interaction) {
    var subTable = {
        food: "Food",
        baking: "Baking",
        burger: "Burgers",
        dessert: "Dessert",
        healthy: "HealthyFood",
        pizza: "Pizza",
        recipe: "GifRecipes",
        oddfood: "ShittyFoodPorn",
        steak: "Steak",
      },
      command = interaction.options.getSubcommand();

    // Sends the index of command in the subTable and
    // returns the corresponding subreddit
    reddit(subTable[command], interaction).catch(console.error);
  },
};
