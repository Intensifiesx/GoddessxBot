/*
  Creator: Zain Hindi
  Bot: Goddessx 
  Description: Main file for the bot.
*/

//Main libraries
import { Routes } from "discord-api-types/v9";
import { REST } from "@discordjs/rest";
import { Client, Collection, IntentsBitField, PermissionsBitField, ActivityType } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

//Setting intents, collections and token
const client = new Client({
    intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages],
  }),
  rest = new REST({ version: "9" }).setToken(process.env.TOKEN),
  commands = new Collection();

//Files
let cmdCount = 0,
  cmds = [];

const file = [
  await import("./commands/Help.js"),
  await import("./commands/Actions/Action.js"),
  await import("./commands/ActionsNSFW/ActionNsfw.js"),
  await import("./commands/Emotes/Emotes.js"),
  await import("./commands/Memes/Memes.js"),
  await import("./commands/Mod/Mod.js"),
  await import("./commands/Fun/Fun.js"),
  await import("./commands/Pets/Pets.js"),
  await import("./commands/Foods/Foods.js")
].map((file) => {
  commands.set(file.default.data.name, file.default);
  cmds.push(file.default.data.toJSON());
});

// Refresh commands
(async () => {
  try {
    // Get client id
    console.log("✲ Refreshing application slash commands!");
    await rest.put(Routes.applicationCommands(process.env.CLIENTID), {
      body: cmds,
    });
    console.log(`✓ Reloaded ${cmds.length} application slash commands!!!`);
  } catch (error) {
    console.error(error);
  }
})();

// On ready
client.once("ready", () => {
  console.log(
    `------------------------\n`,
    `Bot: ${client.user.tag} Online!\n`,
    `Currently in ${client.guilds.cache.size} Servers.`,
    `\n------------------------`
  );
  function reloadActivity() {
    client.user.setPresence({
      activities: [
        {
          name: `/Help | ${client.guilds.cache.size} Servers`,
          type: ActivityType.Competing,
        },
      ],
      status: "dnd",
    });
  }
  reloadActivity();
  setInterval(reloadActivity, 60000);
});

// Slash command interaction
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return; // if interaction is not a slash command, return

  var commandName = interaction.commandName;

  // Log command
  console.log(`#${++cmdCount} ${interaction.user.username} | Used: ${interaction}`);

  try {
    //Check if channel exists and has permission. If not, return.
    if (interaction.channel !== null) {
      // prettier-ignore
      var botChannelPerms = new PermissionsBitField(interaction.channel.permissionsFor(interaction.guild.members.me));
      if (
        !botChannelPerms.has(
          PermissionsBitField.Flags.ViewChannel,
          PermissionsBitField.Flags.SendMessages,
          PermissionsBitField.Flags.EmbedLinks,
          PermissionsBitField.Flags.ReadMessageHistory
        )
      )
        return interaction.reply({
          content:
            "Channel permissions required for bot: `VIEW_CHANNEL, SEND_MESSAGES, EMBED_LINKS and READ_MESSAGE_HISTORY`!",
          ephemeral: true,
        });
    }

    await commands.get(commandName).execute(interaction, client); // Get and execute command
  } catch (error) {
    // Error
    console.error(error);
    await interaction.reply({
      content:
        "There was an error while executing this command! Please contact our support team.\nhttps://discord.gg/NbN4hs6",
      ephemeral: true,
    });
  }
});

// Button interaction
client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) return; // If interaction is a slash command, return

  // Files
  var { Buttons, Menu } = await import("./commands/Help.js"),
    customId = interaction.customId,
    funOp = "./commands/Fun/Fun Options/";

  // Update interactions
  // prettier-ignore
  switch(customId){
    case `actions`: return Menu.updateHelp(interaction, Menu.actions(), Buttons.back());
    case `fun`: return Menu.updateHelp(interaction, Menu.fun(), Buttons.back());
    case `mod`: return Menu.updateHelp(interaction, Menu.mod(), Buttons.back());
    case `reddit`: return Menu.updateHelp(interaction, Menu.reddit(), Buttons.back());
    case `nsfw`: return Menu.updateHelp(interaction, Menu.nsfw(), Buttons.back());
    case `creator`: return Menu.updateHelp(interaction, Menu.creator(), Buttons.creator());
    case `backMenu`: return Menu.updateHelp(interaction, Menu.main(), [Buttons.rowOne(), Buttons.rowTwo()]);
    case `nextImg`: return await(await import(`${funOp}Img.js`)).updateImg(interaction, false);
    case `backImg`: return await(await import(`${funOp}Img.js`)).updateImg(interaction, true);
    case `nextGif`: return await(await import(`${funOp}Gif.js`)).Gifs.updateGif(interaction, false); 
    case `backGif`: return await(await import(`${funOp}Gif.js`)).Gifs.updateGif(interaction, true); 
    case `nextUrban`: return await(await import(`${funOp}Urban.js`)).Urban.updateUrban(interaction, false);
    case `backUrban`: return await(await import(`${funOp}Urban.js`)).Urban.updateUrban(interaction, true);
    case `nextAnime`: return await(await import(`${funOp}AnimeSeason.js`)).Animes.updateAnime(interaction, false);
    case `backAnime`: return await(await import(`${funOp}AnimeSeason.js`)).Animes.updateAnime(interaction, true);
    case `hit`: return await (await import(`${funOp}Blackjack.js`)).BlackJack.userHit(interaction);
    case `stand`: return await (await import(`${funOp}Blackjack.js`)).BlackJack.userStand(interaction);
    case `deletePost`: return await(await import("./commands/Reddit.js")).deletePost(interaction);
    case `ratherA`: return await(await import(`${funOp}Rather.js`)).Rather.showVotes(interaction, "A");
    case `ratherB`: return await(await import(`${funOp}Rather.js`)).Rather.showVotes(interaction, "B");
    default: 
      if(customId.startsWith(`ttt`) && customId.length === 4 && customId[3] > 0 && customId[3] < 10){
        return await(await import(`${funOp}TicTacToe.js`)).TTT.updateTTT(interaction, customId[3]);
      }
  }
});

client.login(process.env.TOKEN); // Login to Discord
