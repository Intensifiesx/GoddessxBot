const gifs = [
  "https://media.discordapp.net/attachments/673038708785545256/1180836479900078100/Finger1.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180836480302714941/Finger2.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180836480713760818/Finger3.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180836481145786409/Finger4.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180836481531646012/Finger5.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180836481993023528/Finger6.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180836482395689010/Finger7.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180836482798325881/Finger8.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180836483117097040/Finger9.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180836483557511178/Finger10.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180837101298782229/Finger11.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180837101697249370/Finger12.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180837102104100894/Finger13.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180837103240744990/Finger14.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180837103676960828/Finger15.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180837104104783872/Finger16.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180837104654225424/Finger17.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180837105220464640/Finger18.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180837105639899196/Finger19.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180837106004791337/Finger20.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180837513812770937/Finger21.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180837514437730345/Finger22.gif",  
];

export default {
  name: "finger",
  main: function (user, author) {
    var responses = [
      `${author} fingers ${user}!`,
      `${user} is getting fingered by ${author}!`,
      `${user} was fingered by ${author}!`,
    ];
    return [responses, gifs];
  },
};
