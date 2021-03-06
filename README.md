# AutoTradePupper(Money Making Machine)

This project solves the problem of zerodha streak daily login. The project is inspired by [Indrajit Mukherjee's](https://youtube.com/playlist?list=PLfIBJEuyAQEuP_pIVmYxq6-seFP3y0CKC) youtube playlist.

Requirements/Tools Used-

- **AWS account** for hosting the server.
- **Zerodha Kite** account and **Zerodha Streak**
- **TradeRocket** chrome extension for automated acceptance of orders.

## How to start

```bash
   npm install -g yarn  # Install yarn

   # Now download the repository using the below command
   git clone --branch AWS https://github.com/UnresolvedCold/AutoTrader.git

   yarn  # Install all the required modules
```

Add Environment variables as mentioned in './src/Constants.js'. Guide on how to add environment variables can be found [here](https://medium.com/@kapilgorve/set-environment-variable-in-windows-and-wsl-linux-in-terminal-c5e11138e807).

- On Windows

```bash
   # Open command prompt and type the following

   setx AutoTradePuppet_Name="Your name in quotes" /M
   setx AutoTradePuppet_Id="Your Id in quotes" /M
   setx AutoTradePuppet_Password="Your password in quotes" /M
   setx AutoTradePuppet_Pin="Your pin in quotes" /M
```

- On Linux

```bash
   sudo gedit ~/.bashrc    #Open the configuration file

   # Add the following line at the end
   # And replace the required details accordingly
   export AutoTradePuppet_Name="Your name in quotes"
   export AutoTradePuppet_Id="Your Id in quotes"
   export AutoTradePuppet_Password="Your password in quotes"
   export AutoTradePuppet_Pin="Your pin in quotes"


```

Note - Adding security configurations like this is compromisable if there is a breach in the system.

```bash
   yarn start # To run your server
```

## Disclaimer

This project is just for personal use. The author is not responsible for any loss.
