const{app, BrowserWindow}=require('electron');
function createWindow(){
    const venta = new BrowserWindow({
        width:1500,
        heigth:800
    })
    venta.loadFile('index.html')
}
app.whenReady().then(createWindow)