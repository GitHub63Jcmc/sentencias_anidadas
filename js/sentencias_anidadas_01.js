
function iniciarFunciones() {

    let numero = parseInt(prompt("Ingrese un número de 0 a 4")); // Convertir el valor a número
    
    function funcionA() {
        alert("Ejecutando función A");
        document.getElementById("la_p1").innerHTML = "Ejecutando función A"; // Actualizar el contenido del <p>
    }
    
    function funcionB() {
        alert("Ejecutando función B");
        document.getElementById("la_p2").innerHTML = "Ejecutando función B"; // Actualizar el contenido del <p>
    }
    
    function funcionC() {
        alert("Ejecutando función C");
        document.getElementById("la_p3").innerHTML = "Ejecutando función C"; // Actualizar el contenido del <p>
    }
    
    function funcionD() {
        alert("Ejecutando función D");
        document.getElementById("la_p4").innerHTML = "Ejecutando función D"; // Actualizar el contenido del <p>
    }
    
    for (let i = 0; i < 4; i++) {
        if (i === numero) {
            switch (i) {
                case 0:
                    funcionA();
                    break;
                case 1:
                    funcionB();
                    break;
                case 2:
                    funcionC();
                    break;
                case 3:
                    funcionD(); // Llamar a la función correcta
                    break;
                default:
                    alert("Ninguna función aplicable");
            }
            break; // Salimos del bucle una vez que se ejecuta el caso correcto
        }
    }
}

