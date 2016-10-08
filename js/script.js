var NumCargas = null;
var R = null;
var matriz = null;
//Carga de Prueba
var x = null;
var y = null;
var z = null;
var corp = new Array
    /**
     * Esta funcion se usa para dar los espacios de los coeficientes
     * ingresando el NumCargas de la ecuacion
     */
function armarCondiciones() {

    xp = document.getElementById('X').value
    yp= document.getElementById('Y').value
    zp = document.getElementById('Z').value
    x=Number(xp);
    y=Number(yp);
    z=Number(zp);
    corp = [[x, y, z],[x, y, z],[x, y, z]]
        //Solicita datos (NumCargas)
    var temp = document.getElementById("NumCargas").value;
    NumCargas = Number(temp);
    matriz = document.getElementById('Matriz')
    var temp2 = document.getElementById("R").value;
    R = Number(temp2);
    //Analiza si se ingreso el NumCargas adecuado
    if (NumCargas === null || NumCargas === 0) {
        alert("Ingrese Orden");
        return;
    }
    if (R == 2) {
        window.alert("Recuerde cargas en  Coulomb \n y Cordenadas en Metros")
        dibujarMatriz(matriz)
    } else if (R == 3) {
        window.alert("Recuerde cargas en  Coulomb \n y Coordenadas en Metros")
        dibujarMatriz(matriz)
    } else {
        window.alert('Solo se puede para R^2 y R^3')
    }

}

function dibujarMatriz(matriz) {
    matriz.innerHTML = "";
    for (i = 0; i < NumCargas; i++) {
        var nuevaFila = matriz.insertRow(-1)
        for (j = 0; j <=R; j++) {
            var CELDA = nuevaFila.insertCell(-1);
            var input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.setAttribute('data-fila', i)
            input.setAttribute('data-columna', j)
            input.setAttribute('size', '3')
            CELDA.appendChild(input)
        }
    }
}

function capturar() {
  var tablaDeCargas = document.getElementById("tablaDeCargas")
var r = new Array
    for (var i = 0; i < matriz.length; i++) {

        for (var j = 0; j < 3; j++) {
            r[i][j] = Math.sqrt(Math.pow(matriz[i][j] - corp[i][j], 2) + Math.pow(matriz[i][j + 1] - corp[i][j + 1], 2) + Math.pow(corq1[i][j + 1] - corp[i][j + 1], 2))
            j += 2
        }
    }

    var vector = new Array
    vector = EvaluarVector(matriz, corp, r)
    campoElectrico = EvaluarCampo(tablaDeCargas, vector, r)
    NormaCampo = NormaCampo(campoElectrico)
}

function EvaluarVector(matriz, corp, r) {

  var rvector = new Array
  for (var i = 0; i < matriz.length; i++) {

      for (var j = 0; j < 3; j++) {

        rvector[i][j]=((matriz[i][j] - corp[i]) / r[i][j]) * (-1)
        j+=2
      }
  }
    return rvector

}

function EvaluarCampo(tablaDeCargas, vector, r) {
    var k = 9 * Math.pow(10, 9)
    var campoElectrico = new Array
    for (var i = 0; i < matriz.length; i++) {

        for (var j = 0; j < 3; j++) {

          campoElectrico[i][j]=(k*tablaDeCargas[j]/ Math.pow(r[i][j], 2))*vector[i][j]
          j+=2
        }
    }
    console.log('campoElectrico ' + campoElectrico);
    return campoElectrico
}

function NormaCampo(campoElectrico) {

    normaE = Math.sqrt(Math.pow(campoElectrico[0], 2) + Math.pow(campoElectrico[1], 2) + Math.pow(campoElectrico[2], 2))

console.log(normaE);

    return normaE

}
