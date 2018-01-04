# bitrex-bot

## This is still under HEAVY development and no where near ready for implementation.
- to run server, use terminal to enter folder then run the server.js with nodejs.
- then in web browser goto localhost:3005

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
- https://oscarotero.com/jquery/

### Current Issues.
- Need to figure out how to remove "" from CSV while being read and input to array.
