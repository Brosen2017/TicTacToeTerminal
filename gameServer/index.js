const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.listen(port, ()=>{
  console.log('Welcome to TicTacToe!')
})

