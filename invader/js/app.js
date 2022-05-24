var app = {
    gridX : 8,
    gridY : 8,
    pixelSize : 20,
    colors : ['D2DAE2', '485460', 'FABF52', '80E98A'],
    currentColor : 'D2DAE2',
    createPixels : function () {
        var pixelQty = app.gridX * app.gridY;
        var invaderGrid = document.querySelector('.invader__grid');
        invaderGrid.innerHTML = "";
        for (var a = 0; a < pixelQty; a++) {
            var newPixel = document.createElement('div');
            invaderGrid.appendChild(newPixel);
    
            newPixel.addEventListener("mousedown", function(event){
                event.target.style.backgroundColor = "#" + app.currentColor;
            })
        }
        invaderGrid.style.gridTemplateRows = 'repeat(' + app.gridY + ', ' + app.pixelSize + 'px)';
        invaderGrid.style.gridTemplateColumns = 'repeat(' + app.gridX + ', ' + app.pixelSize + 'px)';
    },
    init : function(form, grid, colorSelector) {
 
        // CREATE FORM
        if (form === "form") {
            var gridSizeX = document.createElement('input');
            gridSizeX.type = "number";
            gridSizeX.id = "gridSize";
            gridSizeX.placeholder = "Largeur grille";
            gridSizeX.addEventListener('change', function(event) {
                app.gridX = gridSizeX.value;
                app.createPixels();
            })
        
            var gridSizeY = document.createElement('input');
            gridSizeY.type = "number";
            gridSizeY.id = "gridSize";
            gridSizeY.placeholder = "Longueur grille";
            gridSizeY.addEventListener('change', function(event) {
                app.gridY = gridSizeY.value;
                app.createPixels();
            })
            
            var pixelSize = document.createElement('input');
            pixelSize.type = "number";
            pixelSize.id = "gridSize";
            pixelSize.placeholder = "Taille des pixels";
            pixelSize.addEventListener('change', function(event) {
                app.pixelSize = pixelSize.value;
                app.createPixels();
            })
        
            document.querySelector('.configuration').append(gridSizeX, gridSizeY, pixelSize);
        }

        // CREATE GRID
        if (grid === "grid"){
            var invader = document.querySelector('#invader');
            var invaderGrid = document.createElement('grid');
            invaderGrid.className = 'invader__grid';
            invader.appendChild(invaderGrid);
        }

        // CREATE COLORSELECTOR
        if (colorSelector === "colorSelector"){
            var colorSelectorDiv = document.querySelector('#colorSelector');
            colorSelectorDiv.innerHTML = "";
            for (b = 0; b < app.colors.length ; b++) {
                var newDiv = document.createElement('div');
                newDiv.className = 'colors';
                newDiv.id = app.colors[b];
                newDiv.style.backgroundColor = "#" + app.colors[b];
                colorSelectorDiv.appendChild(newDiv);
                newDiv.addEventListener('click', function(event) {
                    app.currentColor = event.target.id;
                    for (i = 0; i < app.colors.length; i++){
                        document.querySelectorAll(".colors")[i].classList.remove("colors--selected");
                    }
                    event.target.classList.add("colors--selected");
                    }
                )
            }
            var newColor = document.createElement('div');
                newColor.className = 'colors';
                newColor.textContent = "+";
                newColor.classList.add('newColor');
                newColor.id = "newColor";
                newColor.addEventListener('click', app.addColor);
                colorSelectorDiv.appendChild(newColor);
            document.getElementById(app.currentColor).classList.add("colors--selected");
        }
    },
    addColor : function(){
        var color = prompt("Code couleur (hex) a ajouter");
        app.colors.push(color);
        app.init("","","colorSelector");
    }
}

app.init("form","grid","colorSelector");
app.createPixels();