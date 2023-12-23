const gifs = [
  "https://media.discordapp.net/attachments/673038708785545256/1180850679363936347/Spank1.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850679791767582/Spank2.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850680152473610/Spank3.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850680525758485/Spank4.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850680894869615/Spank5.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850681226215474/Spank6.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850681641443389/Spank7.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850681960222793/Spank8.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850682304151692/Spank9.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850678957096970/Spank10.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850704789819582/Spank11.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850705238605844/Spank12.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850705641250826/Spank13.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850706085859368/Spank14.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850706622726254/Spank15.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850707155406878/Spank16.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850708048789574/Spank17.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180850704408125500/Spank18.gif",  
];

export default {
  name: "spank",
  main: function (user, author) {
    var responses = [
      `${author} spanks ${user}!`,
      `${user} is getting spanked by ${author}!`,
      `${user} was spanked by ${author}!`,
    ];
    return [responses, gifs];
  },
};
