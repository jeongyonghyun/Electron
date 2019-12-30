const {app,BrowserWindow} = require("electron");

let win

function createWindow(){
    win = new BrowserWindow({width:800, height:600});
    win.loadFile("index.html");
    win.on("closed",()=>{
        win = null;
    });
};

app.on("ready",createWindow);               //when window is ready

app.on("window-all-closed",()=>{            //only applicable for MAC
    if(process.platform=="darwin"){
        app.quit();
    }
});

app.on("activate",()=>{
    if(win === null)
    createWindow();
});