const electron = require("electron");
const ipc = elctron.ipcRenderer;

const errorBtn = document.querySelector('#error');

errorBtn.addEventListener('click', function () {
    ipc.send('open-error-dialog')
});