var R = null;

//Carga de Prueba
var x = null;
var y = null;
var z = null;

var isFirst = true;



function Rs() {
    if (isFirst) {

        window.alert(" A pesar de haber seleccionado un espacio vectorial, puedes modificar ingresando los otros componentes");
    }
}



// Indexador de cargas
var iCarga = 0;
//arreglo donde añado los inputs
var div = [];

function aniadirCarga() {
    window.alert("Recuerde cargas en  Coulomb \n y Coordenadas en Metros");

    div[iCarga] = document.createElement("div");
    var d = div[iCarga];

    // Valor de la carga
    var inputV = document.createElement("input");
    inputV.setAttribute("type", "number");
    ////opecional para desavilitar espacio vectorial
    //inputV.setAttribute("value", "0");
    inputV.setAttribute("placeholder", "Valor de la carga");


    inputV.id = "cargaV" + iCarga;
    d.appendChild(inputV);


    var inputVE = document.createElement("input");
    inputVE.setAttribute("type", "number");
    inputVE.id = "cargaVE" + iCarga;
    inputVE.setAttribute("placeholder", "Potencia de la carga");
    d.appendChild(inputVE);

    //posicion
    var inputX = document.createElement("input");
    inputX.setAttribute("type", "number");
    inputX.setAttribute("placeholder", "0");
    inputX.setAttribute("required", "true");

    inputX.id = "cargaX" + iCarga;
    d.appendChild(inputX);;

    var inputY = document.createElement("input");
    inputY.setAttribute("type", "number");
    if (R != 2) {
        inputY.setAttribute("value", "0");
    }
    inputY.id = "cargaY" + iCarga;
    d.appendChild(inputY);


    var inputZ = document.createElement("input");
    inputZ.setAttribute("type", "number");
    if (R != 3) {
        inputZ.setAttribute("value", "0");
    }
    inputZ.id = "cargaZ" + iCarga;
    d.appendChild(inputZ);
    document.body.appendChild(d);
    iCarga++;
}


//////////////////////Calcula campo

function calcularCampo() {

    var valorCarga = null;
    var valorCargaE = null;

    var r = null;
    //mE hace refencia a k*q1)/r
    var mE = null;

    var posX = null;
    var posY = null;
    var posZ = null;

    var K = 9 * Math.pow(10, 9);

    var componentesX = null;
    var componentesY = null;
    var componentesZ = null;

    console.log("calculando campo");
    xp = document.getElementById('X').value
    yp = document.getElementById('Y').value
    zp = document.getElementById('Z').value

    // Calculo la normal ->r
    for (var i = 0; i < iCarga; i++) {
        posX = document.getElementById("cargaX" + i).value;
        posY = document.getElementById("cargaY" + i).value;
        posZ = document.getElementById("cargaZ" + i).value;

        var dx = posX - xp;
        var dy = posY - yp;
        var dz = posZ - zp;
        r = Math.sqrt((Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2)));

        valorCarga = document.getElementById("cargaV" + i).value;
        valorCargaE = document.getElementById("cargaVE" + i).value;
        //var temp = Math.pow(valorCarga[i],valorCargaE[i]);
        var temp = valorCarga * Math.pow(10, valorCargaE);

        var aux = (K * temp) / r;
        console.log(componentesX);
        componentesX = componentesX + aux * (dx / r);
        componentesY = componentesY + aux * (dy / r);
        componentesZ = componentesZ + aux * (dz / r);
        //  imprimirResultado(componentes);

        console.log(componentesX);

        document.getElementById("solucion").innerHTML = " ( " + componentesX + " )i + (" + componentesY + " )j + ( " + componentesY + " )k";

    }

}
