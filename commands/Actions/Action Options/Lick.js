const gifs = [
  "https://imgur.com/0yiqvuE.gif",
  "https://imgur.com/j8hY2Fj.gif",
  "https://imgur.com/z0r7fgl.gif",
  "https://imgur.com/sCd1Ls5.gif",
  "https://imgur.com/5Cmh66g.gif",
  "https://imgur.com/TcWB7mz.gif",
  "https://imgur.com/LqJk56S.gif",
  "https://imgur.com/2q86XjG.gif",
  "https://imgur.com/ZBpwLSj.gif",
  "https://imgur.com/SYzZepJ.gif",
  "https://imgur.com/X0tD5L7.gif",
  "https://imgur.com/MyjjSvg.gif",
  "https://imgur.com/jIxEawe.gif",
  "https://imgur.com/wqIwGPl.gif",
  "https://imgur.com/NiAq1H7.gif",
  "https://imgur.com/EtyUvFb.gif",
  "https://imgur.com/4PxdnaS.gif",
  "https://imgur.com/Qy22an3.gif",
  "https://imgur.com/G6MbAGC.gif",
  "https://imgur.com/8WwofWb.gif",
  "https://imgur.com/85iq97D.gif",
  "https://imgur.com/B4FYVkz.gif",
  "https://imgur.com/JjQ4B2F.gif",
  "https://imgur.com/xEOBJgc.gif",
  "https://imgur.com/s8argOV.gif",
  "https://imgur.com/IPljqHd.gif",
  "https://imgur.com/88iXuda.gif",
  "https://imgur.com/t7jlMqR.gif",
  "https://imgur.com/rHnWWst.gif",
];

export default {
  name: "lick",
  main: function (user, author) {
    const responses = [
      `${user} was licked by ${author}!`,
      `${author} licked ${user}!`,
      `${author} is licking ${user}!`,
    ];
    return [responses, gifs];
  },
};
