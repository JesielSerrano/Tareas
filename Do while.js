let opcionSeleccionada = prompt(`
        Bienvenido a la Calculadora
-------- Ingrese una opcion --------

1. Cálculo de promedio de notas
2. Cálculo de área de un rectángulo
3. Suma de dos números
4. Retorno de nombre del dia según número de dia
5. Salir


`) 



do {
    switch(opcionSeleccionada){
        case '1':
            const nota1 = Number(prompt('Ingrese la primer nota: '))
            const nota2 = Number(prompt('Ingrese la segunda nota: '))    
            const nota3 = Number(prompt('Ingrese la tercera nota: '))
            const nota4 = Number(prompt('Ingrese la cuarta nota: '))
            const promedio = (nota1 + nota2 + nota3 + nota4) / 4
            alert (`El promedio es de ${promedio}`)
                                    
            break

        case '2':
            const base = Number(prompt('Ingrese la base: '))
            const altura = Number(prompt('Ingrese la altura: '))
            const area = base * altura
            alert (`El area del rectangulo es de ${area}`)
                                    
            break

        case '3':
            const Numero1 = Number(prompt('Ingrese el primer numero'))
            const Numero2 = Number(prompt('Ingrese el segundo numero')) 
            const suma = Numero1 + Numero2
            alert (`La respuesta de la suma es de ${suma}`)
            break

        case '4':
            const diaNumero = Number(prompt('Ingrese un número de día del 1 al 7: '));
            let diaNombre;
            switch(diaNumero){
                case 1: diaNombre = "Lunes"; break;
                case 2: diaNombre = "Martes"; break;
                case 3: diaNombre = "Miércoles"; break;
                case 4: diaNombre = "Jueves"; break;
                case 5: diaNombre = "Viernes"; break;
                case 6: diaNombre = "Sábado"; break;
                case 7: diaNombre = "Domingo"; break;
                default: diaNombre = "Número de día inválido"; break; 
            }
            alert(`El día correspondiente es: ${diaNombre}`);
                                    
            break

        default:
            alert('Opcion Incorrecta')
            break            
    }
   if(opcionSeleccionada !== '5')
    opcionSeleccionada = prompt(`
        Bienvenido a la Calculadora
-------- Ingrese una opcion --------

1. Cálculo de promedio de notas
2. Cálculo de área de un rectángulo
3. Suma de dos números
4. Retorno de nombre del dia según número de dia
5. Salir


`)  
}while(opcionSeleccionada !== '5')