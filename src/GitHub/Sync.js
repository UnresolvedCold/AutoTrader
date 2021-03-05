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
        var res = shell.exec("git pull origin TestGithub");

        if (!res.includes("Already up to date")) {
          let today = new Date().toLocaleDateString();
          let branch = shell.exec("git branch");
          shell.echo(`Updated ${branch} on ${today}`);
        } else {
          shell.echo("No need to change");
        }
      }
    }
  );
};

module.exports = {
  Sync,
};
