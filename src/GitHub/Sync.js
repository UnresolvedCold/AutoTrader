const cron = require("node-cron");
const shell = require("shelljs");
const Config = require("../../Config");
const config = require("../../Config");

const Sync = () => {
  return cron.schedule(
    `* ${Config.gitSyncTime[1]} ${Config.gitSyncTime[0]} * * *`,
    async () => {
      if (!shell.which("git")) {
        shell.echo("Git not found.");
      } else {
        shell.exec("git clean -n -f -d", (error) => {
          var res = shell.exec("git pull origin TestGithub");
          shell.echo(res);
        });
      }
    }
  );
};

module.exports = {
  Sync,
};
