var R = null;

//Carga de Prueba
var x = null;
var y = null;
var z = null;
var isFirst = true;
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
    var K = 9 * Math.pow(10, 9)

    var componentesX = null
    var componentesY = null
    var componentesZ = null
    var normaCampo = null
    var anguloX = null
    var anguloY = null
    var anguloZ = null

    console.log("calculando campo");
    xp = document.getElementById('X').value
    yp = document.getElementById('Y').value
    zp = document.getElementById('Z').value

    // Calculo la normal ->r
    for (var i = 0; i < iCarga; i++) {
        posX = document.getElementById("cargaX" + i).value
        posY = document.getElementById("cargaY" + i).value
        posZ = document.getElementById("cargaZ" + i).value

        var dx = posX - xp
        var dy = posY - yp
        var dz = posZ - zp
        r = Math.sqrt((Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2)))

        valorCarga = document.getElementById("cargaV" + i).value;
        valorCargaE = document.getElementById("cargaVE" + i).value;
        //var temp = Math.pow(valorCarga[i],valorCargaE[i]);
        var temp = valorCarga * Math.pow(10, valorCargaE);

        var aux = (K * temp) / Math.pow(r, 2);
        console.log(componentesX);
        componentesX = componentesX + aux * (dx / r) * (-1);
        componentesY = componentesY + aux * (dy / r) * (-1);
        componentesZ = componentesZ + aux * (dz / r) * (-1);

        normaCampo = Math.sqrt(Math.pow(componentesX, 2) + Math.pow(componentesY, 2) + Math.pow(componentesZ, 2))

        //angulos
        anguloX = Math.acos(componentesX/ normaCampo)
        anguloY = Math.acos(componentesY / normaCampo)
        anguloZ = Math.acos(componentesZ / normaCampo)

        anguloX=anguloX*(180/Math.PI)
        anguloY=anguloY*(180/Math.PI)
        anguloZ=anguloZ*(180/Math.PI)

        document.getElementById("solucion").innerHTML = "E <sub>T</sub> = ( " +componentesX + " )i + (" + componentesY + " )j + ( " + componentesZ + " )k";

        var muestraNorma = document.getElementById('solucion2')
        muestraNorma.innerHTML = "E <sub>T</sub> = " + normaCampo;

        var muestraX = document.getElementById('anguloX')

        muestraX.innerHTML = "Angulo en X = " + Math.round(anguloX)+ "<sup>°</sup>";

        var muestraY = document.getElementById('anguloY')

        muestraY.innerHTML = "Angulo en Y = " + Math.round(anguloY)+ "<sup>°</sup>";

        var muestraZ = document.getElementById('anguloZ')

        muestraZ.innerHTML = "Angulo en Z = " + Math.round(anguloZ)+ "<sup>°</sup>";

    }

}
