const gifs = [
  "https://imgur.com/JwTH4KG.gif",
  "https://imgur.com/TfYzhFy.gif",
  "https://imgur.com/FZKUgq4.gif",
  "https://imgur.com/XC0MfCd.gif",
  "https://imgur.com/bVucp25.gif",
  "https://imgur.com/S4GsACX.gif",
  "https://imgur.com/3rqpQVt.gif",
  "https://imgur.com/JFuCiG6.gif",
  "https://imgur.com/jFQGMTe.gif",
  "https://imgur.com/X1gBEqV.gif",
  "https://imgur.com/pH9NEmz.gif",
  "https://imgur.com/yZzhDIU.gif",
  "https://imgur.com/uHLl94A.gif",
  "https://imgur.com/UK1m3LL.gif",
  "https://imgur.com/4qaJHdj.gif",
  "https://imgur.com/Lcsc5yh.gif",
  "https://imgur.com/4EFVjNC.gif",
  "https://imgur.com/wYakzw4.gif",
  "https://imgur.com/jpQLQM7.gif",
];

export default {
  name: "blush",
  main: function (author) {
    var responses = [`${author} is blushing!`];
    return [responses, gifs];
  },
};
