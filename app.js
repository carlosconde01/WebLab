// Carlos Andrés Conde Besil A01650549

//Para ejecutarlo correctamente, correr el siguiente comando en terminal.
// npm install prompt-sync

const prompt = require('prompt-sync')();

const operaciones = require('./operaciones.js');

menu()
var seleccion = Number(prompt('Selecciona una opción: '));

while (seleccion != 0) {

    switch (seleccion) {
        case 1:
            var temp = pedirValores();
            var a = temp[0];
            var b = temp[1];
            var resultado = operaciones.suma(a, b);
            console.log(`${a} + ${b} = ${resultado}`);
            menu()
            seleccion = Number(prompt('Selecciona una opción: '));
            break;
        case 2:
            var temp = pedirValores();
            var a = temp[0];
            var b = temp[1];
            var resultado = operaciones.resta(a, b);
            console.log(`${a} - ${b} = ${resultado}`);
            menu()
            seleccion = Number(prompt('Selecciona una opción: '));
            break;
        case 3:
            var temp = pedirValores();
            var a = temp[0];
            var b = temp[1];
            var resultado = operaciones.multiplicacion(a, b);
            console.log(`${a} * ${b} = ${resultado}`);
            menu()
            seleccion = Number(prompt('Selecciona una opción: '));
            break;
        case 4:
            var temp = pedirValores();
            var a = temp[0];
            var b = temp[1];
            var resultado = operaciones.division(a, b);
            console.log(`${a} / ${b} = ${resultado}`);
            menu()
            seleccion = Number(prompt('Selecciona una opción: '));
            break;
        case 5:
            var temp = pedirValores();
            var a = temp[0];
            var b = temp[1];
            var resultado = operaciones.modulo(a, b);
            console.log(`${a} % ${b} = ${resultado}`);
            menu()
            seleccion = Number(prompt('Selecciona una opción: '));
            break;
        default:
            console.log('Ingresa una opción válida.');
            menu()
            seleccion = Number(prompt('Selecciona una opción: '));
    }


}

function menu() {
    console.log('Presiona 1 para suma.');
    console.log('Presiona 2 para resta.');
    console.log('Presiona 3 para multiplicación.');
    console.log('Presiona 4 para división.');
    console.log('Presiona 5 para módulo.');
    console.log('Presiona 0 para salir.');

}

function pedirValores() {
    var arr = [];
    arr.push(Number(prompt('Ingresa el primer valor: ')));
    arr.push(Number(prompt('Ingresa el segundo valor: ')));
    return arr;
}
