const gifs = [
  "https://imgur.com/43xeOgn.gif",
  "https://imgur.com/kUetJPl.gif",
  "https://imgur.com/X32A68A.gif",
  "https://imgur.com/5qq4O67.gif",
  "https://imgur.com/FXMFgYd.gif",
  "https://imgur.com/PdiYbeu.gif",
  "https://imgur.com/Ujlpeyx.gif",
  "https://imgur.com/r2bZ46P.gif",
  "https://imgur.com/rf2AqzD.gif",
  "https://imgur.com/O30Qnas.gif",
  "https://imgur.com/JxZQEkn.gif",
  "https://imgur.com/m5Qtr37.gif",
  "https://imgur.com/96UONuX.gif",
  "https://imgur.com/3BpKcUW.gif",
  "https://imgur.com/6wx6kNu.gif",
  "https://imgur.com/MhZpH5M.gif",
  "https://imgur.com/bXeKjTS.gif",
  "https://imgur.com/ayql3mG.gif",
  "https://imgur.com/5UffsCn.gif",
  "https://imgur.com/wIUHorc.gif",
  "https://imgur.com/6Z9YwTl.gif",
  "https://imgur.com/glxU99Y.gif",
  "https://imgur.com/CAYQ8ci.gif",
  "https://imgur.com/fZDptRM.gif",
  "https://imgur.com/z8ctnMt.gif",
  "https://imgur.com/HRy8g0U.gif",
  "https://imgur.com/AD7noJb.gif",
  "https://imgur.com/GdCSAhv.gif",
];

export default {
  name: "pog",
  main: function (author) {
    var responses = [`${author} IS POGGING!!`];
    return [responses, gifs];
  },
};
