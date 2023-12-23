const gifs = [
  "https://media.discordapp.net/attachments/673038708785545256/1180855673244893194/SuckPP1.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855673819496558/SuckPP2.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855674280882247/SuckPP3.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855674830323772/SuckPP4.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855675836968990/SuckPP5.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855676508061746/SuckPP6.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855677002973204/SuckPP7.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855677560827954/SuckPP8.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855678068342886/SuckPP9.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855672787709952/SuckPP10.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855742228615208/SuckPP11.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855742757077073/SuckPP12.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855743222665356/SuckPP13.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855743730155570/SuckPP14.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855744137007144/SuckPP15.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855744665505832/SuckPP16.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855745080721448/SuckPP17.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855745449824297/SuckPP18.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855745927991316/SuckPP19.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855741662367804/SuckPP20.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855772964474931/SuckPP21.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855773312581692/SuckPP22.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855773719437403/SuckPP23.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855774050799736/SuckPP24.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855774428266506/SuckPP25.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855774772207726/SuckPP26.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855775107764234/SuckPP27.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855775481036922/SuckPP28.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855775913058304/SuckPP29.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180855772586975252/SuckPP30.gif",  
];

export default {
  name: "suckpp",
  main: function (user, author) {
    var responses = [
      `${user}'s pp was sucked by ${author}!`,
      `${author} is sucking ${user}'s pp!`,
    ];
    return [responses, gifs];
  },
};
