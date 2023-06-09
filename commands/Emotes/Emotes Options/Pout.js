const gifs = [
  "https://imgur.com/Qgp8p7S.gif",
  "https://imgur.com/Q5Kkvv7.gif",
  "https://imgur.com/pNXiWoI.gif",
  "https://imgur.com/ZdWnIzL.gif",
  "https://imgur.com/IBpVC08.gif",
  "https://imgur.com/FLVLAIY.gif",
  "https://imgur.com/C1wx4EG.gif",
  "https://imgur.com/8hybaEi.gif",
  "https://imgur.com/HfgS7SO.gif",
  "https://imgur.com/M0aIPk1.gif",
  "https://imgur.com/CjNh1qK.gif",
  "https://imgur.com/KHVNHQ3.gif",
  "https://imgur.com/TbFN5J6.gif",
  "https://imgur.com/0pxg61V.gif",
  "https://imgur.com/JoL2Kli.gif",
  "https://imgur.com/elNcXvS.gif",
  "https://imgur.com/j7ljBMJ.gif",
  "https://imgur.com/ysNrqv9.gif",
  "https://imgur.com/Q5SpO26.gif",
  "https://imgur.com/JGUh00g.gif",
  "https://imgur.com/tENtWJy.gif",
  "https://imgur.com/DbU4NWB.gif",
  "https://imgur.com/km5fRN6.gif",
  "https://imgur.com/FBf1Sqt.gif",
  "https://imgur.com/DN29Sj1.gif",
  "https://imgur.com/XxXrkvX.gif",
  "https://imgur.com/4Z2n6lx.gif",
  "https://imgur.com/8s6VNqw.gif",
  "https://imgur.com/I6yKQ2O.gif",
  "https://imgur.com/D5wIqTd.gif",
  "https://imgur.com/7g7yuXO.gif",
];

export default {
  name: "pout",
  main: function (author) {
    var responses = [`${author} is pouting!`];
    return [responses, gifs];
  },
};
