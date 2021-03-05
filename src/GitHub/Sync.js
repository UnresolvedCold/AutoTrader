const cron = require("node-cron");
const shell = require("shelljs");
const Config = require("../../Config");

const Sync = () => {
  return cron.schedule(
    `0 ${Config.gitSyncTime[1]} ${Config.gitSyncTime[0]} * * *`,
    async () => {
      shell.config.silent = true;
      if (!shell.which("git")) {
        shell.echo("Git not found.");
      } else {
        var res = shell.exec(`git pull origin ${Config.gitBranch}`);

        if (!res.includes("Already up to date")) {
          let today = new Date().toLocaleDateString();
          shell.exec('yarn');
          shell.echo(`Updated on ${today}`);
        }
      }
    }
  );
};

module.exports = {
  Sync,
};
