# AutoTradePupper(Money Making Machine)

This project solves the problem of zerodha streak daily login. The project is inspired by [Indrajit Mukherjee's](https://youtube.com/playlist?list=PLfIBJEuyAQEuP_pIVmYxq6-seFP3y0CKC) youtube playlist.

Requirements/Tools Used-

- **AWS account** for hosting the server.
- **Zerodha Kite** account and **Zerodha Streak**
- **TradeRocket** chrome extension for automated acceptance of orders.

## How to start

1. Install npm on ASW server from [here](https://www.npmjs.com/get-npm).

1. Install yarn

   > `npm install -g yarn`

1. Clone the repository to your AWS server.

   > `git clone ...`

1. Install all the rquired packages

   > `yarn`

1. Add Environment variables as mentioned in './src/Constants.js'. Guide on how to add environment variables can be found [here](https://medium.com/@kapilgorve/set-environment-variable-in-windows-and-wsl-linux-in-terminal-c5e11138e807).

   - On Windows
     <code>
     <br />
     setx AutoTradePuppet_Name="Your name in quotes" /M
     <br />
     setx AutoTradePuppet_Id="Your Id in quotes" /M
     <br />
     setx AutoTradePuppet_Password="Your password in quotes" /M
     <br />
     setx AutoTradePuppet_Pin="Your pin in quotes" /M
     <br />
     </code>
   - On Linux

     <code>
     $ sudo gedit ~/.bashrc
     <br/><br/>
     </code>

     Add the following lines to the end of the file and save.
     <code>
     <br/>
     export AutoTradePuppet_Name="Your name in quotes"
     <br/>
     export AutoTradePuppet_Id="Your Id in quotes"
     <br/>
     export AutoTradePuppet_Password="Your password in quotes"
     <br/>
     export AutoTradePuppet_Pin="Your pin in quotes"
     </code>

     Note - Adding security configurations like this is compromisable if there is a breach in the system.

1. Run the server
   > `yarn start`

## Disclaimer

This project is just for personal use. The author is not responsible for any loss.
