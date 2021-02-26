module.exports = {
  Name: "First Last",   // change
  Id: "AB1234",         // change
  Password: "Password", // change
  Pin: "123456",        // change
  ChromePath: "Chrome_Path.exe",       // change

  startTime: [8, 30], // [hr, min]
  endTime: [16, 0], // [hr, min]
  marketInterval: (s, e) => {
    var ti = (e[0] * 60 + e[1] - s[0] * 60 - s[1]) * 60 * 1000;
    return ti > 0 ? ti : 2000;
  },
};
