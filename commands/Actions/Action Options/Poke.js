const gifs = [
  "https://imgur.com/SepiTF9.gif",
  "https://imgur.com/V13ahpm.gif",
  "https://imgur.com/yTZ0FPo.gif",
  "https://imgur.com/W7SZpae.gif",
  "https://imgur.com/GdmjIkn.gif",
  "https://imgur.com/NFbzGqw.gif",
  "https://imgur.com/WirWlgq.gif",
  "https://imgur.com/s8Gt89U.gif",
  "https://imgur.com/6UvGrlA.gif",
  "https://imgur.com/PNC1Vm3.gif",
  "https://imgur.com/gVki8cy.gif",
  "https://imgur.com/4rFcIGV.gif",
  "https://imgur.com/rHZPo85.gif",
  "https://imgur.com/cqITAie.gif",
  "https://imgur.com/w1b6t4f.gif",
  "https://imgur.com/TILvWvw.gif",
  "https://imgur.com/3LDIOIo.gif",
  "https://imgur.com/7G5mJsC.gif",
  "https://imgur.com/b238ZZx.gif",
  "https://imgur.com/RrHPvOl.gif",
  "https://imgur.com/Scmgohj.gif",
  "https://imgur.com/3pLMkiC.gif",
  "https://imgur.com/s27bNQ1.gif",
  "https://imgur.com/P9H8SRa.gif",
  "https://imgur.com/rB4MN85.gif",
  "https://imgur.com/bPeijjB.gif",
  "https://imgur.com/d6vdf6y.gif",
  "https://imgur.com/SjCkhOl.gif",
  "https://imgur.com/wdmMNUW.gif",
  "https://imgur.com/rdNbsaH.gif",
  "https://imgur.com/jVvcsjJ.gif",
];

export default {
  name: "poke",
  main: function (user, author) {
    const responses = [
      `${user} is being poked by ${author}!`,
      `${author} poked ${user}!`,
    ];
    return [responses, gifs];
  },
};
