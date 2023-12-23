const gifs = [
"https://media.discordapp.net/attachments/673038708785545256/1180830885340254219/Cream1.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180830919389618187/Cream2.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180830937903288430/Cream3.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180830944786141224/Cream4.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180831546396123146/Cream5.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180831561302675476/Cream6.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180831580332228698/Cream7.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180831589987520542/Cream8.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180831602155200582/Cream9.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180831609486856222/Cream10.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180833157633814558/Cream11.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180833217738178560/Cream12.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180833249874948196/Cream13.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180833291910262805/Cream14.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180833803321745428/Cream15.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180833813203533895/Cream16.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180833827539669093/Cream17.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180833838075760710/Cream18.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180833847110283284/Cream19.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180833855851221093/Cream20.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180833869545603184/Cream21.gif",
"https://media.discordapp.net/attachments/673038708785545256/1180833881109299240/Cream22.gif"
];

export default {
  name: "cream",
  main: function (user, author) {
    var responses = [
      `${user} was creamed by ${author}!`,
      `${author} creamed ${user}!`,
      `${author} is creaming ${user}!`,
    ];
    return [responses, gifs];
  },
};
