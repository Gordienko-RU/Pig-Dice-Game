const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

const createWindow = () => {
  win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'bin/index.html'),
    protocol: 'file:'
  }))
};

app.on('ready', createWindow);
