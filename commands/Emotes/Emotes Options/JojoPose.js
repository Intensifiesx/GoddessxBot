const gifs = [
  "https://imgur.com/E9UeWZT.gif",
  "https://imgur.com/1mNk9Vr.gif",
  "https://imgur.com/FbdJqqg.gif",
  "https://imgur.com/j9pUqrL.gif",
  "https://imgur.com/ymOdqKr.gif",
  "https://imgur.com/xAIXnf6.gif",
  "https://imgur.com/jXIZLHL.gif",
  "https://imgur.com/yEjvX8V.gif",
  "https://imgur.com/u13M6J1.gif",
  "https://imgur.com/huRlrHe.gif",
  "https://imgur.com/dTjTLOQ.gif",
  "https://imgur.com/Edefwsf.gif",
  "https://imgur.com/kCCWuOh.gif",
  "https://imgur.com/wgQfAu5.gif",
  "https://imgur.com/ZYU1Efd.gif",
  "https://imgur.com/oKPCoVK.gif",
  "https://imgur.com/HiHFgev.gif",
  "https://imgur.com/QAZRg8B.gif",
  "https://imgur.com/auxqq2E.gif",
  "https://imgur.com/8x09IW1.gif",
  "https://imgur.com/fagDrPC.gif",
  "https://imgur.com/EJsHG2J.gif",
  "https://imgur.com/tPQAOHd.gif",
  "https://imgur.com/Fn0F5pg.gif",
  "https://imgur.com/ox4NApS.gif",
  "https://imgur.com/B32sFBZ.gif",
  "https://imgur.com/iDEGQo1.gif",
  "https://imgur.com/t2ttrwG.gif",
  "https://imgur.com/0sT4Gz2.gif",
  "https://imgur.com/bNc7dpw.gif",
  "https://imgur.com/Aufs6rB.gif",
  "https://imgur.com/Qugqz8V.gif",
];

export default {
  name: "jojopose",
  main: function (author) {
    var responses = [`${author} IS JOJOPOSING!!`];
    return [responses, gifs];
  },
};
