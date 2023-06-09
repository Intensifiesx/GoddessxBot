const gifs = [
  "https://imgur.com/0borMd4.gif",
  "https://imgur.com/CGj4IfU.gif",
  "https://imgur.com/vCG31p5.gif",
  "https://imgur.com/lcBTIVH.gif",
  "https://imgur.com/qyP7nv0.gif",
  "https://imgur.com/gIljAdY.gif",
  "https://imgur.com/KgpRkg2.gif",
  "https://imgur.com/pPpMUOA.gif",
  "https://imgur.com/9F9nqqQ.gif",
  "https://imgur.com/k16d6fi.gif",
  "https://imgur.com/6DZgT6I.gif",
  "https://imgur.com/FROjUjq.gif",
  "https://imgur.com/RgrcdzB.gif",
  "https://imgur.com/NItIcVF.gif",
  "https://imgur.com/iKSQCSb.gif",
  "https://imgur.com/Hj2vbQK.gif",
  "https://imgur.com/12LbnOh.gif",
  "https://imgur.com/nQXZPPU.gif",
  "https://imgur.com/e0uQXTu.gif",
  "https://imgur.com/M9W3Ppw.gif",
  "https://imgur.com/oIQXJaX.gif",
];

export default {
  name: "cuddle",
  main: function (user, author) {
    const responses = [
      `${user} was cuddled by ${author}, very wholesome!`,
      `${author} cuddles ${user}!`,
      `${author} is cuddling ${user}!`,
      `${user} and ${author} are cuddling!`,
    ];
    return [responses, gifs];
  },
};
