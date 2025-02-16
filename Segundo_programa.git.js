UN RESTAURANTE OFRECE DESCUENTOS A LOS CLIENTES SEGÚN LA EDAD. LOS MENORES DE 12 AÑOS TIENEN UN DESCUENTO DEL 50% EN
SU CONSUMO. LOS MAYORES DE 65 AÑOS TIENEN UN DESCUENTO DEL 25% EN SU CONSUMO. LOS CLIENTES ENTRE 12 Y 65 AÑOS NO
TIENEN DESCUENTO. ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO TOTAL A PAGAR.

Ejercicio 3. 

const consumo = parseFloat(prompt("Ingrese el monto de su consumo:"));
const edad = parseInt(prompt("Ingrese su edad:"));
 
let descuento = 0;
if (edad < 12) {
        descuento = consumo * 0.50;
} else if (edad > 65) {
        descuento = consumo * 0.25;
}
 
const totalPagar = consumo - descuento;
 
alert("Descuento aplicado: " + descuento);
alert("Monto total a pagar: " + totalPagar);

