module.exports = {
  Name: process.env.AutoTradePuppet_Name || "First Name", // change
  Id: process.env.AutoTradePuppet_Id || "AB1234", // change
  Password: process.env.AutoTradePuppet_Password || "Password", // change
  Pin: process.env.AutoTradePuppet_Pin || "123456", // change

  startTime: [2, 27], // [hr, min]
  endTime: [16, 0], // [hr, min]
  marketInterval: (s, e) => {
    var ti = (e[0] * 60 + e[1] - s[0] * 60 - s[1]) * 60 * 1000;
    return ti > 0 ? ti : 100000;
  },
  gitSyncTime: [3, 50],
  gitBranch: "AWS",
};
