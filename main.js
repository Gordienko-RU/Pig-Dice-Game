const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let gameWin;
let referenceWin;

const createGameWindow = () => {
  gameWin = new BrowserWindow({ width: 800, height: 600 })
  gameWin.loadURL(url.format({
    pathname: path.join(__dirname, 'bin/index.html'),
    protocol: 'file:'
  }))

  gameWin.webContents.openDevTools();
};

const createReferenceWindow = () => {
  referenceWin = new BrowserWindow({ width: 400, height: 200 })
  referenceWin.loadURL(url.format({
    pathname: path.join(__dirname, 'bin/reference.html'),
    protocol: 'file:'
  }))
};

app.on('ready', createGameWindow);
ipcMain.on('asynchronous-message', (event, type) => {
  switch(type) {
    case 'SHOW_REFERENCE': createReferenceWindow(); break;
  }
})
