var app = {
    gridX : 8,
    gridY : 8,
    pixelSize : 20,
    colors : ['D2DAE2', '485460', 'FABF52', '80E98A'],
    currentColor : 'D2DAE2',
    createPixels : function () {
        var pixelQty = app.gridX * app.gridY;
        var invaderGrid = document.querySelector('.invader__grid');
        for (var a = 0; a < pixelQty; a++) {
            var newPixel = document.createElement('div');
            invaderGrid.appendChild(newPixel);
    
            newPixel.addEventListener("click", function(event){
                event.target.style.backgroundColor = "#" + app.currentColor;
            })
        }
        invaderGrid.style.gridTemplateRows = 'repeat(' + app.gridY + ', ' + app.pixelSize + 'px)';
        invaderGrid.style.gridTemplateColumns = 'repeat(' + app.gridX + ', ' + app.pixelSize + 'px)';
    },
    init : function () {
        createForm();
        createGrid();
        colorSelector();
    }
}


function createForm() {
    var form = document.querySelector('.configuration');
    var gridSizeX = document.createElement('input');
    gridSizeX.type = "number";
    gridSizeX.id = "gridSize";
    gridSizeX.name = "gridSize";
    gridSizeX.placeholder = "Largeur grille";
    form.appendChild(gridSizeX);
    gridSizeX.addEventListener('change', function(event) {
        app.gridX = gridSizeX.value;
        document.querySelector('.invader__grid').innerHTML = "";
        app.createPixels();
    })
    var gridSizeY = document.createElement('input');
    gridSizeY.type = "number";
    gridSizeY.id = "gridSize";
    gridSizeY.name = "gridSize";
    gridSizeY.placeholder = "Longueur grille";
    form.appendChild(gridSizeY);
    gridSizeY.addEventListener('change', function(event) {
        app.gridY = gridSizeY.value;
        document.querySelector('.invader__grid').innerHTML = "";
        app.createPixels();
    })
    var pixelSize = document.createElement('input');
    pixelSize.type = "number";
    pixelSize.id = "gridSize";
    pixelSize.name = "gridSize";
    pixelSize.placeholder = "Taille des pixels";
    form.appendChild(pixelSize);
    pixelSize.addEventListener('change', function(event) {
        app.pixelSize = pixelSize.value;
        document.querySelector('.invader__grid').innerHTML = "";
        app.createPixels();
    })
}

function createGrid(){
    var invader = document.querySelector('#invader');
    var invaderGrid = document.createElement('grid');
    invaderGrid.className = 'invader__grid';
    invader.appendChild(invaderGrid);
}

function colorSelector() {
    var colorSelectorDiv = document.querySelector('#colorSelector');
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
    document.querySelector('.colors').classList.add("colors--selected");
}

app.init();
app.createPixels();