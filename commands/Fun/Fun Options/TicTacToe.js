import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "../../RandColor.js";
var playerTurn,
  playerArr,
  interact,
  rowComps,
  player1,
  player2,
  player,
  count,
  row1,
  row2,
  row3;

const TTT = {
  TTTMain: async function (interaction) {
    row1 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel(".")
          .setCustomId("ttt1")
          .setStyle(ButtonStyle.Secondary)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel(".")
          .setCustomId("ttt2")
          .setStyle(ButtonStyle.Secondary)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel(".")
          .setCustomId("ttt3")
          .setStyle(ButtonStyle.Secondary)
      );
    row2 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel(".")
          .setCustomId("ttt4")
          .setStyle(ButtonStyle.Secondary)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel(".")
          .setCustomId("ttt5")
          .setStyle(ButtonStyle.Secondary)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel(".")
          .setCustomId("ttt6")
          .setStyle(ButtonStyle.Secondary)
      );
    row3 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel(".")
          .setCustomId("ttt7")
          .setStyle(ButtonStyle.Secondary)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel(".")
          .setCustomId("ttt8")
          .setStyle(ButtonStyle.Secondary)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel(".")
          .setCustomId("ttt9")
          .setStyle(ButtonStyle.Secondary)
      );
    rowComps = {
      0: row1.components[0],
      1: row1.components[1],
      2: row1.components[2],
      3: row2.components[0],
      4: row2.components[1],
      5: row2.components[2],
      6: row3.components[0],
      7: row3.components[1],
      8: row3.components[2],
    };
    count = -1;
    interact = interaction;
    playerTurn = 2;
    player1 = "X";
    player2 = "O";
    playerArr = [3, 4, 5, 6, 7, 8, 9, 10, 11];
    player = interaction.user;

    await interaction.reply({
      embeds: [TTT.changeEmbed()],
      components: [row1, row2, row3],
    });
  },
  embed: function () {
    return new EmbedBuilder()
      .setColor(randColor())
      .setTitle("#️⃣ **TicTacToe** #️⃣")
      .setThumbnail(
        player.avatarURL({ format: "png", dynamic: true, size: 512 })
      );
  },
  updateTTT: async function (interaction, id) {
    // If current player has pressed a button
    if (interaction.user.id === this.player()) {
      this.disable(id - 1); // Disable button
      await interaction.update({
        // Update button
        embeds: [this.changeEmbed()],
        components: [row1, row2, row3],
      });
    } // Else it is not this player's turn
    else
      await interaction.reply({
        content: "It isn't your turn!",
        ephemeral: true,
      });
  },
  player: function () {
    // If playerTurn is even, it is player1's turn
    if (count % 2 === 0) return interact.options.getUser("user").id;
    // Else it is player2's turn
    else return interact.user.id;
  },
  setSign: function () {
    count++;
    if (count % 2 === 0) {
      // If playerTurn is even, it is player1's turn
      playerTurn = 1; // Set playerTurn to 1
      player = interact.options.getUser("user"); // Set player to player1
      return player1; // Return player1's sign
    }
    playerTurn = 2; // Set playerTurn to 2
    player = interact.user; // Set player to player2
    return player2; // Return player2's sign
  },
  checkWin: function () {
    //check for draw
    if (count === 8) return false;

    //check rows for win diagonally
    if (
      (playerArr[0] === playerArr[4] && playerArr[4] === playerArr[8]) ||
      (playerArr[2] === playerArr[4] && playerArr[4] === playerArr[6])
    )
      return true;
    //check rows for win horizontally
    if (
      (playerArr[0] === playerArr[1] && playerArr[1] === playerArr[2]) ||
      (playerArr[3] === playerArr[4] && playerArr[4] === playerArr[5]) ||
      (playerArr[6] === playerArr[7] && playerArr[7] === playerArr[8])
    )
      return true;
    //check rows for win vertically
    if (
      (playerArr[0] === playerArr[3] && playerArr[3] === playerArr[6]) ||
      (playerArr[1] === playerArr[4] && playerArr[4] === playerArr[7]) ||
      (playerArr[2] === playerArr[5] && playerArr[5] === playerArr[8])
    )
      return true;
  },
  disableAll: function () {
    for (let i = 0; i < 9; i++) rowComps[i].setDisabled(true); // Disable all buttons
  },
  changeEmbed: function () {
    var embed = this.embed(); // Get embed

    // Check for win
    if (this.checkWin()) {
      if (playerTurn === 1)
        player = interact.user; // If playerTurn is 1, set player to player2
      else player = interact.options.getUser("user"); // Else set player to player1
      this.disableAll(); // Disable all buttons
      embed.setDescription(`${player} HAS WON!`); // Set description to player has won
      embed.setThumbnail(player.avatarURL({ format: "png", dynamic: true })); // Set thumbnail to player's avatar
    } else if (this.checkWin() === false) {
      // Check for draw
      this.disableAll(); // Disable all buttons
      embed
        .setDescription(`TIE GAME!`)
        .setThumbnail("https://imgur.com/uO3NI1W.png");
    } else embed.setDescription(`It's ${player}'s turn!`); // Else it is player's turn

    return embed; // Return embed
  },
  disable: function (arrIndex) {
    playerArr[arrIndex] = playerTurn; // Disable button
    rowComps[arrIndex] // Set button to player's sign
      .setLabel(`${TTT.setSign()}`)
      .setStyle(playerTurn === 1 ? ButtonStyle.Danger : ButtonStyle.Success) // Else return green)
      .setDisabled(true);
  },
  // gameTimedOut: function () {
  //   var embed = this.embed()
  //     .setDescription(
  //       `${interact.user} and ${interact.options.getUser(
  //         "user"
  //       )}\nyour game has timed out!`
  //     )
  //     .setThumbnail(
  //       "https://i.pinimg.com/originals/4c/c5/3a/4cc53a5ae71234a0fd79998a8d2a802f.png"
  //     );
  //   return embed;
  // },
};
export { TTT };
