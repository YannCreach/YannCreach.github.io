var app = {
    gridX : 8,
    gridY : 8,
    pixelSize : 20,
    colors : ['D2DAE2', '485460', 'FABF52', '80E98A'],
    currentColor : 'D2DAE2',
    addColor : function(){
        var color = prompt("Code couleur (hex) a ajouter");
        app.colors.push(color);
        init.createColorSelector();
    }
}

document.addEventListener("DOMContentLoaded", initApp);