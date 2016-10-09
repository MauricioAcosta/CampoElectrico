var NumCargas = null;
var R = null;

//Carga de Prueba
var x = null;
var y = null;
var z = null;


function armarCondiciones() {


    //Analiza si se ingreso el NumCargas adecuado
    if (NumCargas === null || NumCargas === 0) {
        alert("Ingrese Orden");
        return;
    }


    if (document.getElementById("R1").checked) {
        R = 1;
        window.alert("Recuerde cargas en  Coulomb \n y Cordenadas en Metros");
        //dibujarMatriz(matriz);
        aniadirCarga();


    } else if (document.getElementById("R2").checked) {
        R = 2;
        window.alert("Recuerde cargas en  Coulomb \n y Cordenadas en Metros");
        //  dibujarMatriz(matriz);
    } else if (document.getElementById("R3").checked) {
        R = 3;
        window.alert("Recuerde cargas en  Coulomb \n y Coordenadas en Metros");

    } else {
        window.alert('Seleciona el campo a trabajar');
    }



}


// Indexador de cargas
var iCarga = 0;
//arreglo donde añado los inputs
var div = [];

function aniadirCarga() {

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
    inputX.id = "cargaX" + iCarga;
    d.appendChild(inputX);;

    var inputY = document.createElement("input");
    inputY.setAttribute("type", "number");
    inputY.id = "cargaY" + iCarga;
    d.appendChild(inputY);


    var inputZ = document.createElement("input");
    inputZ.setAttribute("type", "number");
    inputZ.id = "cargaZ" + iCarga;
    d.appendChild(inputZ);
    document.body.appendChild(d);
    iCarga++;
}


//////////////////////Calcula campo

function calcularCampo() {

    var valorCarga = [];
    var valorCargaE = [];

    var r = [];
    //mE hace refencia a k*q1)/r
    var mE = [];

    var posX = [];
    var posY = [];
    var posZ = [];
    var K = 9 * Math.pow(10, 9);
    var componentes = [[]];

    console.log("calculando campo");
    xp = document.getElementById('X').value
    yp = document.getElementById('Y').value
    zp = document.getElementById('Z').value

    // Calculo la normal ->r
    for (var i = 0; i < iCarga; i++) {
        posX[i] = document.getElementById("cargaX" + i).value;
        posY[i] = document.getElementById("cargaY" + i).value;
        posZ[i] = document.getElementById("cargaZ" + i).value;

        var dx =posX[i] - xp;
        var dy =posY[i] - yp;
        var dz = posZ[i] - zp;
        r[i] = Math.sqrt((Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2)));

        valorCarga[i] =document.getElementById("cargaV"+i ).value;
        valorCargaE[i] = document.getElementById("cargaVE"+i).value;
        //var temp = Math.pow(valorCarga[i],valorCargaE[i]);
        var temp =valorCarga[i]*Math.pow(10,valorCargaE);

        var aux = (K*temp)/r[i];

        componentes[i][0] = aux*(dx/r[i]);
        componentes[i][1] = aux*(dy/r[i]);
        componentes[i][2] = aux*(dz/r[i]);


    }


}
