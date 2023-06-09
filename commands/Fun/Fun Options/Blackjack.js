import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "../../RandColor.js";
var dealerTotalStr, // Dealer total string
  userTotalStr, // User total string
  dealerTotal, // Dealer gets 1 card
  userTotal, // User gets 2 cards
  author, // Author of message
  green = 0x00ff00, // Green
  grey = 0x808080, // Grey
  red = 0xff0000; // Red

const BlackJack = {
  winnerFound: false, // If a winner has been found
  blackjackMain: async function (interaction) {
    var row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("HIT")
          .setCustomId("hit")
          .setStyle(ButtonStyle.Success)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("STAND")
          .setCustomId("stand")
          .setStyle(ButtonStyle.Danger)
      );

    dealerTotalStr = ""; // Reset dealer total string
    userTotalStr = ""; // Reset user total string
    userTotal = BlackJack.writeTotals(true) + BlackJack.writeTotals(true); // User draws 2 cards
    dealerTotal = BlackJack.writeTotals(false); // Dealer draws 1 card
    author = interaction.user;

    await interaction.reply({ embeds: [BlackJack.embed()], components: [row] });

    // Wait 120 seconds until game times out
    setTimeout(async () => {
      if (this.winnerFound == false) {
        var timedOutMenu = this.embed();
        this.menu(timedOutMenu, 0x808080, `Game has timed out!`);
        await interaction
          .editReply({
            components: [],
            embeds: [timedOutMenu],
          })
          .catch((err) => {
            console.log(
              `INTERACTION - User: ${interaction.user.username} Blackjack Message Deleted`
            );
          });
      }
    }, 120000);
  },
  writeTotals: function (isUser) {
    var r = this.rand(isUser); // Get random card for user
    if (isUser) {
      if (userTotalStr === "")
        userTotalStr = `${r}`; // User has not yet drawn a card
      else userTotalStr += ` | ${r}`; // User has drawn a card and add it to the string
    } else {
      if (dealerTotalStr === "")
        dealerTotalStr = `${r}`; // Dealer has not yet drawn a card
      else dealerTotalStr += ` | ${r}`; // Dealer has drawn a card and add it to the string
    }
    return r;
  },
  rand: function (usersTurn) {
    var percent = Math.floor(Math.random() * 52); // Get random number between 0 and 51
    if (percent < 4) {
      if (usersTurn) {
        if (userTotal + 11 > 21) return 1; // If user over 21, return 1
        else return 11; // If user under 21, return 11
      } else {
        if (dealerTotal + 11 > 21) return 1; // If dealer over 21, return 1
        else return 11; // If dealer under 21, return 11
      }
    } else if (percent < 8) return 2;
    else if (percent < 12) return 3;
    else if (percent < 16) return 4;
    else if (percent < 20) return 5;
    else if (percent < 24) return 6;
    else if (percent < 28) return 7;
    else if (percent < 32) return 8;
    else if (percent < 36) return 9;
    else if (percent < 52) return 10;
  },
  embed: function () {
    return new EmbedBuilder()
      .setColor(randColor())
      .setTitle("🃏 Blackjack 🃏")
      .setDescription("Do you want to **HIT** or **STAND**?")
      .addFields(
        {
          name: `${author.username}:`,
          value: `\`\`\`js\n${userTotalStr} \n= ${userTotal}\`\`\``,
          inline: true,
        },
        {
          name: `Dealer:`,
          value: `\`\`\`js\n${dealerTotalStr} \n= ${dealerTotal}\`\`\``,
          inline: true,
        }
      )
      .setTimestamp()
      .setFooter({ text: `Blackjack`, iconURL: author.avatarURL() });
  },
  menu: function (menu, color, desc) {
    menu.setColor(color).setDescription(desc);
  },
  userStand: async function (interaction) {
    if (interaction.user.id === author.id) {
      this.dealerHit();
      var endMenu = this.embed();

      // Dealer busts, user has won
      if (this.bust(dealerTotal))
        this.menu(endMenu, green, `${author} **WINS** - Dealer **BUSTS**!`);
      // User has lost
      else if (this.dealerHit() === 1)
        this.menu(endMenu, red, `Dealer **WINS**!`);
      // User has won
      else if (this.dealerHit() === 0)
        this.menu(endMenu, green, `${author} **WINS**!`);
      // User has tied with dealer
      else if (this.dealerHit() === 2)
        this.menu(endMenu, grey, `**STALEMATE**!`);

      this.winnerFound = true;
      // Update the message
      await interaction.update({ components: [], embeds: [endMenu] });
    } else
      await interaction.reply({
        content: "You cannot play!",
        ephemeral: true,
      });
  },
  userHit: async function (interaction) {
    if (interaction.user.id === author.id) {
      userTotal += this.writeTotals(true); // Add card to user total

      // User busts, user has lost
      if (this.bust(userTotal)) {
        this.winnerFound = true;
        var bustMenu = this.embed();
        this.menu(bustMenu, red, `${author} **BUSTS**!`);
        await interaction.update({
          components: [],
          embeds: [bustMenu],
        });
      } else await interaction.update({ embeds: [this.embed()] }); // Update embed
    } else
      await interaction.reply({
        content: "You cannot play!",
        ephemeral: true,
      });
  },
  dealerHit: function () {
    while (dealerTotal < 17) dealerTotal += this.writeTotals(false); //Stops at 17

    //Dealer wins
    if (dealerTotal > userTotal && dealerTotal <= 21) return 1;
    //Player wins
    else if (dealerTotal < userTotal && userTotal <= 21) return 0;
    //Stalemate
    else return 2;
  },
  bust: function (total) {
    if (total > 21) return true; // Player busts
    else return false; // Player does not bust
  },
};
export { BlackJack };
