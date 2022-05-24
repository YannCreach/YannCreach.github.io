var init = {
    createForm : function() {
        var gridSizeX = document.createElement('input');
            gridSizeX.type = "number";
            gridSizeX.id = "gridSize";
            gridSizeX.placeholder = "Largeur grille";
            gridSizeX.addEventListener('change', function(event) {
                app.gridX = gridSizeX.value;
                init.createPixels();
            })
        
            var gridSizeY = document.createElement('input');
            gridSizeY.type = "number";
            gridSizeY.id = "gridSize";
            gridSizeY.placeholder = "Longueur grille";
            gridSizeY.addEventListener('change', function(event) {
                app.gridY = gridSizeY.value;
                init.createPixels();
            })
            
            var pixelSize = document.createElement('input');
            pixelSize.type = "number";
            pixelSize.id = "gridSize";
            pixelSize.placeholder = "Taille des pixels";
            pixelSize.addEventListener('change', function(event) {
                app.pixelSize = pixelSize.value;
                init.createPixels();
            })
        
            document.querySelector('.configuration').append(gridSizeX, gridSizeY, pixelSize);
    },
    createGrid : function(){
            var invader = document.querySelector('#invader');
            var invaderGrid = document.createElement('grid');
            invaderGrid.className = 'invader__grid';
            invader.appendChild(invaderGrid);
    },
    createColorSelector : function() {
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
    },
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
}

function initApp(){
    init.createForm();
    init.createGrid();
    init.createColorSelector();
    init.createPixels();
}