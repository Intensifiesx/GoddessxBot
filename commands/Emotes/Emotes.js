import { SlashCommandBuilder } from "@discordjs/builders";
import { EmbedBuilder } from "discord.js";
import randColor from "../RandColor.js";
import blush from "./Emotes Options/Blush.js";
import cry from "./Emotes Options/Cry.js";
import dab from "./Emotes Options/Dab.js";
import dance from "./Emotes Options/Dance.js";
import flip from "./Emotes Options/Flip.js";
import jojopose from "./Emotes Options/JojoPose.js";
import pog from "./Emotes Options/Pog.js";
import pout from "./Emotes Options/Pout.js";
import sadrain from "./Emotes Options/SadRain.js";
import sleep from "./Emotes Options/Sleep.js";
import smug from "./Emotes Options/Smug.js";
import beg from "./Emotes Options/Beg.js";

export default {
  data: new SlashCommandBuilder()
    .setName("e")
    .setDescription("😴 Emotes for interacting with friends!")
    .addSubcommand((subcommand) =>
      subcommand
        .setName(beg.name)
        .setDescription("😴 Sends a random begging gif!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(blush.name)
        .setDescription("😴 Sends a random blushing gif!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(cry.name)
        .setDescription("😴 Sends a random crying gif!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(dab.name)
        .setDescription("😴 Sends a random dabbing gif!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(dance.name)
        .setDescription("😴 Sends a random dancing gif!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(flip.name)
        .setDescription("😴 Sends a random flipping gif!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(jojopose.name)
        .setDescription("😴 Sends a random jojo pose gif!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(pog.name)
        .setDescription("😴 Sends a random pogging gif!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(pout.name)
        .setDescription("😴 Sends a random pouting gif!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(sadrain.name)
        .setDescription("😴 Sends a random sad raining gif!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(sleep.name)
        .setDescription("😴 Sends a random sleeping gif!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(smug.name)
        .setDescription("😴 Sends a random smugging gif!")
    ),
  async execute(interaction) {
    try {
      var embed = new EmbedBuilder().setColor(randColor()),
        command = interaction.options.getSubcommand(),
        author = interaction.user,
        action;

      // prettier-ignore
      switch(command){
        case beg.name: action = beg.main(author); break;
        case blush.name: action = blush.main(author); break;
        case cry.name: action = cry.main(author); break;
        case dab.name: action = dab.main(author); break;
        case dance.name: action = dance.main(author); break;
        case flip.name: action = flip.main(author); break;
        case jojopose.name: action = jojopose.main(author); break;
        case pog.name: action = pog.main(author); break;
        case pout.name: action = pout.main(author); break;
        case sadrain.name: action = sadrain.main(author); break;
        case sleep.name: action = sleep.main(author); break;
        case smug.name: action = smug.main(author); break;
        default: 
      }

      // action contains = [gifs[], responses[]] <- array of arrays.
      // Ex. action[0][2] <- get gif 3
      embed
        .setDescription(action[0][Math.floor(Math.random() * action[0].length)])
        .setImage(action[1][Math.floor(Math.random() * action[1].length)]);

      // Mention the user
      await interaction.reply({
        embeds: [embed],
      });
    } catch (err) {
      console.log(err);
    }
  },
};
