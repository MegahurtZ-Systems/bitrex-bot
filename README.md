# bitrex-tools

## This is still under HEAVY development and no where near ready for implementation.
- to run server, use terminal to enter folder then run the server.js with nodejs.
- then in web browser goto localhost:3005

## Updates
- Jan 04 2018 - After some time developing this app we have come to a decision to change the name from Bitres-Box to Bitrex-Tools.  We realized we were building an application that went beyond the scope of a just a bot.  We will still be developing the bot as one of the tools included in this application, but this has started to become much more than just a bot.

### Technologies used in the development of this app.
HTML5, CSS, JavaScript, nodejs

### Purpose.
- Step 1) Create a CSV parser that can show analytical data about trades.  This will be a stand alone app that has the user download their bittrex data from the bittrex site then uses the app to get a better understanding of what is happening with their coin.
- Step 2) Pull and display basic data from Bittrex via their API.
- Step 3) Be able to manipulate that data to notice trends to help trading.
- Step 4) Implement Mock trading algorithms for testing.
- Step 5) Be able to make manual trades from the site using API's and keys.
- Step 6) Integrate Trading and Bot algorithms for auto trades.

### Project Notes.
- jquery-3, ajax
- -$('selector string').actionToPerform(args);
- dependencies - npm install nodemon express body-parser pg fs node-bittrex-api axios
- nodemon - checks server for changes and applies them without restarting the server
- express - Web server
- body-parser - parses body data
- pg - connector for PostgreSQL database
- fs - File system package
- node-bittrex-api - api connector for bittrex data
- axios - json api data parser
- https://oscarotero.com/jquery/

### Current Issues/to do list.
- seperate api keys from the server to a file that can be added to the .gitignore file.
- Use axios to pull public market data and store in variable arrays.  
- Use bittrex-api for advanced features that will require the user to create an account.
- Create functions that download and update market historical data to postgresql database.
- look to see if there is anything already made that can pull the bittrex market data and store them to a json file.
- look for method to import json data, manipulate it via javascript, then save the updated data to the json file.
- lood for a method to use internet version of jquery but be able to fall back on a localy stored version when web is not available.