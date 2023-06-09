const gifs = [
  "https://imgur.com/9UiqrZZ.gif",
  "https://imgur.com/5e2KU5O.gif",
  "https://imgur.com/cobHRIS.gif",
  "https://imgur.com/DgkBOKw.gif",
  "https://imgur.com/qToieDI.gif",
  "https://imgur.com/KnFnAhf.gif",
  "https://imgur.com/EzXptft.gif",
  "https://imgur.com/0zFyo7j.gif",
  "https://imgur.com/Ad836Dd.gif",
  "https://imgur.com/jr0OLdO.gif",
  "https://imgur.com/uLqlHDi.gif",
  "https://imgur.com/x6bSMql.gif",
  "https://imgur.com/KxTdfDI.gif",
  "https://imgur.com/OKvXgpW.gif",
  "https://imgur.com/Esv6Npd.gif",
  "https://imgur.com/zivoyoj.gif",
  "https://imgur.com/6cKPs2g.gif",
  "https://imgur.com/5UszsmJ.gif",
  "https://imgur.com/75wnQTZ.gif",
  "https://imgur.com/uoTArvf.gif",
  "https://imgur.com/2OEE3cx.gif",
];

export default {
  name: "cry",
  main: function (author) {
    var responses = [`${author} is crying!`];
    return [responses, gifs];
  },
};
