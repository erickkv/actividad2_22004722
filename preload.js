const {ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld (
    'comunicacion',
    {
        registroValido: (datos) => ipcRenderer.send('registroValido', datos),

        usuarioRepetido: (callback) => ipcRenderer.on('usuarioRepetido', callback),

        inicioCorrecto: (callback) => ipcRenderer.on('inicioCorrecto', callback)
    }
)
