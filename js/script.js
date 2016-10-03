function capturar() {
    window.alert("Recuerde cargas en  Coulomb \n y Coordenadas en Metros")
        //carga 1
    var q1 = document.getElementById('Q1').value
    var x1 = document.getElementById('X1').value
    var y1 = document.getElementById('Y1').value
    var z1 = document.getElementById('Z1').value

    var corq1 = new Array
    corq1 = [x1, y1, z1]


    //carga 2
    var q2 = document.getElementById('Q2').value
    var x2 = document.getElementById('X2').value
    var y2 = document.getElementById('Y2').value
    var z2 = document.getElementById('Z2').value

    var corq2 = new Array
    corq2 = [x2, y2, z2]

    //arga 3
    var q3 = document.getElementById('Q3').value
    var x3 = document.getElementById('X3').value
    var y3 = document.getElementById('Y3').value
    var z3 = document.getElementById('Z3').value

    var corq3 = new Array
    corq3 = [x3, y3, z3]


    //cccarga de prueba
    var x = document.getElementById('X').value
    var y = document.getElementById('Y').value
    var z = document.getElementById('Z').value

    var corp = new Array
    corp = [x, y, z]

    try {

        if (!validarEntero([q1,q2,q3,corq1,corq2,corq3,corp])) {
            throw new Error('Algunos campos no son enteros')
        }
        var r1 = Math.sqrt(Math.pow(corq1[0] - corp[0], 2) + Math.pow(corq1[1] - corp[1], 2) + Math.pow(corq1[2] - corp[2], 2))

        var r2 = Math.sqrt(Math.pow(corq2[0] - corp[0], 2) + Math.pow(corq2[1] - corp[1], 2) + Math.pow(corq2[2] - corp[2], 2))

        var r3 = Math.sqrt(Math.pow(corq3[0] - corp[0], 2) + Math.pow(corq3[1] - corp[1], 2) + Math.pow(corq3[2] - corp[2], 2))

        vector1 = EvaluarVector(corq1, corp, r1)
        vector2 = EvaluarVector(corq2, corp, r2)
        vector3 = EvaluarVector(corq3, corp, r3)

        campoElectrico1 = EvaluarCampo(q1, vector1, r1)
        campoElectrico2 = EvaluarCampo(q2, vector2, r2)
        campoElectrico3 = EvaluarCampo(q3, vector3, r3)

        var muestra1 = document.getElementById('Muestra1')
        var muestra2 = document.getElementById('Muestra2')
        var muestra3 = document.getElementById('Muestra3')
        var muestra4 = document.getElementById('Muestra4')

        muestra1.innerHTML = 'E<sub>T</sub> = E<sub>q1p</sub> + E<sub>q2p</sub> + E<sub>q3p</sub>';
        muestra2.innerHTML = 'E<sub>T</sub> = ' + campoElectrico1[0] + 'i + ' + campoElectrico1[1] + 'j + ' + campoElectrico1[2] + 'k + ' + campoElectrico2[0] + 'i + ' + campoElectrico2[1] + 'j + ' + campoElectrico2[2] + 'k + ' + campoElectrico3[0] + 'i + ' + campoElectrico3[1] + 'j + ' + campoElectrico3[2] + 'k '

        var i = campoElectrico1[0] + campoElectrico2[0] + campoElectrico3[0]
        var j = campoElectrico1[1] + campoElectrico3[1] + campoElectrico2[1]
        var k = campoElectrico1[2] + campoElectrico2[2] + campoElectrico3[2]

        muestra3.innerHTML = 'E<sub>T</sub> = ' + i + ' i + ' + j + ' j + ' + k + ' k '

        normaE = NormaCampo(i, j, k)

        muestra4.innerHTML = '|E| = ' + normaE + ' N/C '
    }catch (e) {

    window.alert('Ingresaste valores incorrectos')

} finally {

}



}
var es = {
entero: function(str) {
        if (str === parseInt(str, 10).toString()) {
            return true
        } else {
            return false
        }
    },
}
    function validarEntero(parametros) {
        for (var i = 0; i < parametros.length; i++) {
            if (typeof(parametros[i]) === "object") {
                for (var j = 0; j < parametros[i].length; j++) {
                    if (!es.entero(parametros[i][j])) {
                        return false
                    }
                }
            } else if (!es.entero(parametros[i])) {
                return false
            }
        }
        return true
    }

function EvaluarVector(corq, corp, r) {
    var rvector = new Array
    rvector[0] = ((corq[0] - corp[0]) / r)
    rvector[1] = ((corq[1] - corp[1]) / r)
    rvector[2] = ((corq[2] - corp[2]) / r)
    return rvector

}

function EvaluarCampo(q, vector, r) {

    var k = 9 * Math.pow(10, 9)
    var campoElectrico = new Array
    campoElectrico[0] = ((k * q) / r) * vector[0]
    campoElectrico[1] = ((k * q) / r) * vector[1]
    campoElectrico[2] = ((k * q) / r) * vector[2]
    console.log('campoElectrico ' + campoElectrico);
    return campoElectrico


}

function NormaCampo(i, j, k) {

    var normaE = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2) + Math.pow(k, 2))

    return normaE

}
