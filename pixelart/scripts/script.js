let currentColor = "red";
let isDrawing = false;

function addCol(){
	let rows = document.getElementsByTagName("tr");
	for (let i = 0; i < rows.length; i++){
		let cell = document.createElement("td");
		cell.addEventListener("mousedown", function () { isDrawing = true;
                              this.style.backgroundColor = currentColor;
                              });
		cell.addEventListener("mouseover", function () {
		    if (isDrawing)
		    { this.style.backgroundColor = currentColor; }
		});
		cell.addEventListener("mouseup", function () { isDrawing = false; });
		rows[i].appendChild(cell);
	}
}

function remCol(){
    let rowList = document.getElementsByTagName("tr");
    for (let i = 0; i < rowList.length; i++){
        rowList[i].lastChild.remove();
    }
}

function addRow(){
    console.log("addRow called");
    let table = document.getElementById("table1");

    let numcols = 0
    if (document.getElementsByTagName("tr")[0]) {
        numcols = document.getElementsByTagName("tr")[0].getElementsByTagName("td").length;
    } else {
        numcols = 53;
    }

	let newRow = document.createElement("tr");
	for (let i = 0; i < numcols; i++) {
	    let cell = document.createElement("td");
	    cell.addEventListener("mousedown", function () { isDrawing = true;
                                                    this.style.backgroundColor = currentColor;
                              });
		cell.addEventListener("mouseover", function() {
		    if (isDrawing)
		    { this.style.backgroundColor = currentColor; }
		});
		cell.addEventListener("mouseup", function () { isDrawing = false; });
        newRow.appendChild(cell);
	}

	table.appendChild(newRow);
}

function remRow(){
    let table = document.getElementById("table1");
    table.lastChild.remove();
}

window.onload = function(){
    for (let i = 0; i < 30; i++){
        addRow();
    }
    document.getElementById("redButton").style.backgroundColor = "#E5E1FF";
    document.getElementsByClassName("dark")[0].addEventListener("mousedown", function () { isDrawing = true; });
    document.getElementsByClassName("dark")[0].addEventListener("mouseup", function () { isDrawing = false; });
    document.getElementById("navSection").addEventListener("mousedown", function () { isDrawing = true; });
    document.getElementById("navSection").addEventListener("mouseup", function () { isDrawing = false; });
}

function clearColors(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "#E5E1FF";
    }
}

function changeColorToBlue(){
    currentColor = "blue";
    let colorButtons = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.backgroundColor = "white";
    }
    document.getElementById("blueButton").style.backgroundColor = "#E5E1FF";
}

function changeColorToGreen(){
    currentColor = "green";
    let colorButtons = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.backgroundColor = "white";
    }
    document.getElementById("greenButton").style.backgroundColor = "#E5E1FF";
}

function changeColorToRed(){
    currentColor = "red";
    let colorButtons = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.backgroundColor = "white";
    }
    document.getElementById("redButton").style.backgroundColor = "#E5E1FF";
}

function changeColorToBlack(){
    currentColor = "black";
    let colorButtons = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.backgroundColor = "white";
    }
    document.getElementById("blackButton").style.backgroundColor = "#E5E1FF";
}

function changeColorToGrey(){
    currentColor = "grey";
    let colorButtons = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.backgroundColor = "white";
    }
    document.getElementById("greyButton").style.backgroundColor = "#E5E1FF";
}

function changeColorToPink(){
    currentColor = "pink";
    let colorButtons = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.backgroundColor = "white";
    }
    document.getElementById("pinkButton").style.backgroundColor = "#E5E1FF";
}

function changeColorToDefault(){
    currentColor = "#E5E1FF";
    let colorButtons = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.backgroundColor = "white";
    }
    document.getElementById("defaultButton").style.backgroundColor = "#E5E1FF";
}

function fillEmptyCells(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++){
        if (cells[i].style.backgroundColor != "red" && cells[i].style.backgroundColor != "green" &&
                cells[i].style.backgroundColor != "blue"){
            cells[i].style.backgroundColor = currentColor;
        }
    }
}

function fillAllCells(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = currentColor;
    }
}
