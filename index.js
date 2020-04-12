const electron = require('electron');
const path = require('path');
const { app, BrowserWindow,Tray } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow(
        {
            webPreferences: {
                nodeIntegration: true,
                backgroundThrottling: false
            },
            width: 800,
            height: 500,
        }
    );

    if(process.env.NODE_ENV) {
        mainWindow.loadURL(`file://${__dirname}/build/index.html`);
    } else {
        mainWindow.loadURL('http://localhost:3000');
    }

    const iconName = process.platform === 'win32' ? 'windows-icon.png':'iconTemplate.png';
    const iconPath = path.join(__dirname, `./assets/${iconName}`);
    mainWindow.tray = new Tray(iconPath, mainWindow);
});