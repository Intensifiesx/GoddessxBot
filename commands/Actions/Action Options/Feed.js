const gifs = [
  "https://imgur.com/DJGwEvK.gif",
  "https://imgur.com/A0FfjsA.gif",
  "https://imgur.com/3mNjndZ.gif",
  "https://imgur.com/GVtfxmQ.gif",
  "https://imgur.com/ZCJHtBN.gif",
  "https://imgur.com/qnCJCBd.gif",
  "https://imgur.com/rY4fgWY.gif",
  "https://imgur.com/tI7IaNb.gif",
  "https://imgur.com/3KQSxRu.gif",
  "https://imgur.com/empOWY0.gif",
  "https://imgur.com/dznWDqS.gif",
  "https://imgur.com/umWHUzi.gif",
  "https://imgur.com/SDCTlB1.gif",
  "https://imgur.com/w9GIuH5.gif",
  "https://imgur.com/9EDKngI.gif",
  "https://imgur.com/jogzL2g.gif",
  "https://imgur.com/kscX3AS.gif",
  "https://imgur.com/8cIn8bg.gif",
  "https://imgur.com/s3VhBU0.gif",
  "https://imgur.com/Cou4HvW.gif",
  "https://imgur.com/ujcmATS.gif",
  "https://imgur.com/VgboLqw.gif",
  "https://imgur.com/xTlqXEo.gif",
  "https://imgur.com/3hybNBN.gif",
  "https://imgur.com/MaJMgqA.gif",
  "https://imgur.com/u6Q3cid.gif",
];

export default {
  name: "feed",
  main: function (user, author) {
    const responses = [
      `${user} is being fed by ${author}!`,
      `${author} is feeding ${user}, yummy!`,
      `${user} was fed by ${author}, foodies!!!`,
      `${author} feeds ${user}!`,
    ];
    return [responses, gifs];
  },
};
