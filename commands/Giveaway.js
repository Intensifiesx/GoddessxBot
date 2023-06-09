// var { SlashCommandBuilder } = require("@discordjs/builders");
// module.exports = {
//   data: new SlashCommandBuilder()
//     .setName("giveaway")
//     .setDescription("☃️ CHRISTMAS GIVEAWAY! 1 Free Discord Nitro Classic code!")
//     .addIntegerOption((option) =>
//       option
//         .setName("num")
//         .setDescription("Guess number between 1-1000")
//         .setRequired(true)
//     ),
//   async execute(interaction, client, userWon) {
// 	if (interaction.guild.id !== `447503325080977416`)
//       return interaction.reply(
//         `${interaction.user}, You are not in the correct server!`
//       );
//     var num = interaction.options.getInteger("num"),
//       giveawayNum = 765;

//     if (num === giveawayNum && userWon.a === false) {
//       interaction.user.send(
//         "Here is your code! Thank you for playing.\nhttps://discord.gift/qJkEXP3Pjzrsw3d7"
//       );
//       console.log("USER HAS WON: " + interaction.user.username);
//       userWon.a = true;
//       return interaction.reply(
//         `${interaction.user}, ✅ YOU WON 1 NITRO CLASSIC CODE! CHECK YOUR DMS!`
//       );
//     } else if (num !== giveawayNum && userWon.a === false)
//       return await interaction.reply(
//         `${interaction.user}, ❌ You didn't guess the number correct! Try again!`
//       );
//     else
//       return await interaction.reply(
//         `${interaction.user}, Discord Nitro code has already been claimed! Thank you for playing!`
//       );
//   }
// };
