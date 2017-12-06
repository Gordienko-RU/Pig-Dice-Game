const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let gameWin;

const createGameWindow = () => {
  gameWin = new BrowserWindow({ width: 800, height: 600 })
  gameWin.loadURL(url.format({
    pathname: path.join(__dirname, 'bin/index.html'),
    protocol: 'file:'
  }))
};

app.on('ready', createGameWindow);
