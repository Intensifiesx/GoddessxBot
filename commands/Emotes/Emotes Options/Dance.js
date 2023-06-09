const gifs = [
  "https://imgur.com/byDFZCt.gif",
  "https://imgur.com/OCoEyOE.gif",
  "https://imgur.com/wcpVaZO.gif",
  "https://imgur.com/9QaWMnz.gif",
  "https://imgur.com/ZadseL0.gif",
  "https://imgur.com/qK3VcpE.gif",
  "https://imgur.com/vu25aDK.gif",
  "https://imgur.com/w2JS9ny.gif",
  "https://imgur.com/tKVABMV.gif",
  "https://imgur.com/gIDpkYL.gif",
  "https://imgur.com/q12Yo90.gif",
  "https://imgur.com/AAETIdu.gif",
  "https://imgur.com/E8tBqJS.gif",
  "https://imgur.com/6hQxjao.gif",
  "https://imgur.com/lotXxxC.gif",
  "https://imgur.com/uaGB2XT.gif",
  "https://imgur.com/Vu82QwJ.gif",
  "https://imgur.com/4ZGCtYA.gif",
  "https://imgur.com/j4L7L3t.gif",
  "https://imgur.com/5H5lEip.gif",
  "https://imgur.com/h4E7GY0.gif",
  "https://imgur.com/1LLBLrD.gif",
  "https://imgur.com/j0YJnlz.gif",
  "https://imgur.com/A9aEmYJ.gif",
  "https://imgur.com/S5rgr81.gif",
  "https://imgur.com/WlVqrqj.gif",
];

export default {
  name: "dance",
  main: function (author) {
    var responses = [`${author} is dancing!`];
    return [responses, gifs];
  },
};
