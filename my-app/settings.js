const electron = require('electron');
const { app, BrowserWindow, Menu, ipcMain, ipcRenderer } = require('electron');
    
  console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg); // prints "pong"
  });
  ipcRenderer.send('asynchronous-message', 'ping');