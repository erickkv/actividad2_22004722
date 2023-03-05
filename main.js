const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path')

let ventana;

let usuarios = [];

function createWindow() {
    ventana = new BrowserWindow({
        width: 400,
        height: 400,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    });
    ventana.loadFile('index.html')
}

let ventana2;

function createWindow2() {
    ventana2 = new BrowserWindow({
        width: 400,
        height: 400,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    });
    ventana2.loadFile('segundo.html')
}

ipcMain.on('registroValido', function(event, args) {
    let test;
    if (usuarios.includes(args)) {
        test = false;
        ventana.webContents.send('usuarioRepetido', test)
    } else {
        ventana.webContents.send('usuarioRepetido', test)
        usuarios.push(args);
        ventana.loadFile('index.html');
        createWindow2();
        ventana2.webContents.on('did-finish-load', function() {
            ventana2.webContents.send('inicioCorrecto', 'Bienvenido ' + args)
        });
        console.log(usuarios);
    }
});

app.whenReady().then(createWindow)
