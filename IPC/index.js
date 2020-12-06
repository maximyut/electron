const electron = require("electron");
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const ipc = electron.ipcMain;
const dialog = electron.dialog;

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipc.on('ipc-error-dialog', function (event) {
    dialog.showErrorBox('An error message', 'message');
});