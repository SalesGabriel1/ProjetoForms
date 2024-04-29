function calcularBhaskara () {
    var a = parseFloat(document.getElementById ('coeficiente-a').value) 
    var b = parseFloat(document.getElementById ('coeficiente-b').value)
    var c = parseFloat(document.getElementById ('coeficiente-c').value)


var delta = b * b - 4 * a * c;

if (delta < 0) {
    document.getElementById("resultado").innerText = "A equação não possui raízes reais.";
} else if (delta >0) {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.getElementById("resultado").innerText = "Raízes da equação: x1 = " + x1.toFixed(2) + " e x2 = " + x2.toFixed(2);
}

}
