//pregunta 1

//datos
// const rick = [96, 108, 89, 97, 112, 101, 97, 112, 101];
// const morty = [88, 191, 110, 109, 95, 123, 109, 95, 106];

const rick = [12, 120, 80, 888];
const morty = [12, 120, 80, 8888];
// Calcule el puntaje promedio de cada equipo, utilizando los datos de prueba
// proporcionados al final del enunciado

function promedioRick(rick){
    const sumatoria = rick.reduce(function(acumualador , siguientevalor ){
        return acumualador + siguientevalor;
    },0);

    const promedioR = sumatoria / rick.length;
    return promedioR;
    
}

function promedioMorty(morty){
    const sumatoria = morty.reduce(function(acumulador = 0, siguientevalor){
        
        return acumulador + siguientevalor;
    });

    const promedioM = sumatoria / morty.length;
    return promedioM;
    
}

//pregunta1
console.log("pregunta 1");
console.log("El promedio de rick es: ",promedioRick(rick));

console.log("promedio de morty es : ", promedioMorty(morty));

//pregunta 2 
// Compare los puntajes promedio del equipo para determinar el ganador de la
// competencia, e imprimirlo en la consola. No olvides que puede haber un
// empate, así que toma en cuenta ese caso también
console.log("pregunta 2");        
if(promedioRick(rick) > promedioMorty(morty)){
  console.log("Rick es el equipo ganador: ");
}else
if(promedioMorty(morty) > promedioRick(rick)){
  console.log("Morty es el equipo ganador: ");
}else{
  console.log("existe un empate");
}

//pregunta3
// Incluya el requisito de una puntuación mínima de 100. Con esta regla el equipo
// solo gana si tiene una puntuación más alta que el otro equipo, y además tiene
// una puntuación de al menos 100 puntos.
console.log("pregunta 3");
if(promedioRick(rick) > promedioMorty(morty)){
  if(promedioRick(rick) >=100 ){
      console.log('Rick es el equipo ganador');
  }else{
        console.log('Rick no puede ganar por que no tiene la puntuacion necesariar');
        if( promedioMorty(morty) >=100){
           console.log('Morty es el equipo ganador');
        }else{
            console.log('Morty no puede ganar por que tiene una puntuacion menos a 100');
        }}
}else{
  if(promedioMorty(morty) > promedioRick(rick)){
    if( promedioMorty(morty) >=100){
       console.log('Morty es el equipo ganador');
    }else{
       console.log('Morty no puede ganar por que tiene una puntuacion menos a 100');
    }


 
 
  }}; 


// //pregunta4
// // ¡La puntuación mínima también se aplica a un empate! Entonces, un empate
// // solo ocurre cuando ambos equipos tienen la misma puntuación y ambos tienen
// // una puntuación mayor o igual a 100 puntos. De lo contrario, ningún equipo
// // gana el premio

console.log("pregunta 4");
if(promedioRick(rick) >= 100 && promedioMorty(morty) >=100){

  if(promedioRick(rick) === promedioMorty(morty) ){
    console.log('empaate');
  }else{
    console.log('no existe empate'); 
  }  
}else{console.log('ninguno puede ganar')};



// //pregunta5
// // Cree una arrow function 'calcAverage' para calcular el promedio de 3
// // puntuaciones
console.log("pregunta 5");

const puntos = [45, 45, 22,8]
function calcAverage(puntos){
  let suma = 0;
  for(let i = 0; i<3 ; i++){
    suma += puntos[i];
  }
  return suma / (puntos.length );
}
console.log("promedio de los 3 primeros puntos " ,calcAverage(puntos));

// //pregunta6
// // Usa la función para calcular el promedio de ambos equipos.
console.log("pregunta 6")
function calcAverag(rick){
  let sum = 0;
  for(let i = 0; i<rick.length; i++){
      sum += rick[i];
  }
  return sum / (rick.length );
}

function calc(morty){
  let suma =0;
  for(let i = 0; i< morty.length; i++){
    suma +=morty[i];
  }
return suma / (morty.length );
}

console.log("promdeio de rick:",calcAverag(rick), "promedio de morty:",calc(morty) );


// //pegunta7
// // Cree una función 'checkWinner' que tome la puntuación media de cada equipo.
// // como parámetros ('avgRIcks' y 'avgMortys'), y luego muestre el ganador, junto
// // con los puntajes, de acuerdo con la regla anterior. Ejemplo: "Los koalas ganan
// // (30 contra 13)"
console.log("pregunta 7");



// //pregunta8
// // Utilice la función 'checkWinner' para determinar el ganador para los datos 1 y
// // Datos 2
console.log("pregunta 8");






//// pregunta 2
// Datos de prueba para la parte 1:
// Factura 1: 120
// Factura 2: 200
// Factura 3: 275

// Parte 1
// 1. Calcule la propina, dependiendo del valor de la factura. Cree una variable
// llamada ‘tip' para esto. No está permitido usar una declaración if / else 


// 2. Imprima una cadena en la consola que contenga el valor de la factura, la
// propina y el valor final. (factura + propina). Ejemplo: "La factura fue 275, la
// propina fue 41,25 y el valor total 316.25 "
console.log("pregunta 2 ");

const facturatotal = {
  factura: 275,
  propina: 41.25,
  total: 316.25,
}
const atotal = {  ...facturatotal};
console.log("total:",atotal);

// 3. Escriba una arrow function 'calcTip' que tome un valor de factura como entrada
// y devuelva la propina correspondiente, calculada según las reglas anteriores.
// Parte 2 




// Datos de prueba para la parte 2:

// 4. Cree un array de facturas ‘bills’ que contenga los datos de prueba.
console.log("pregunta4");
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console .log(bill);
// 5. Cree arrays vacíos para las propinas y los totales (‘tips' y 'totals')
console.log("pregunta5");
const tips = [];
const totals = [];
// 6. Utilice la función 'calcTip' que escribimos antes para calcular propinas y valores
// totales (factura + propina) para cada valor de factura en la matriz de facturas y
// almacénelos en los arrays correspondientes.
console.log("pregunta6");
function tipCalc(bill) {
  for (let i = 0; i < bill.length; i++) {
      if (bill[i] < 50) {
          tips[i] = bill[i] * 0.2;
          totals[i] = tips[i] + bill[i];
      } else 
        if (bill[i] >= 50 && bill[i] < 300) {
            tips[i] = bill[i] * 0.15;
            totals[i] = tips[i] + bill[i];
        } else {
             tips[i] = bill[i] * 0.20;
             totals[i] = tips[i] + bill[i];
      }
  }
}
tipCalc(bill);
console.log(tips);
// 7. Cree una función para calcular el promedio de cualquier array que se le pase
// como argumento y úselo para calcular el promedio de los tres arrays que tiene
// (‘bills’, ‘tips’ y ‘totals’)

console.log("pregunta7");

function promediobill(bill) {
    let sum = 0;
    for (let i = 0; i < bill.length; i++) {
        sum += bill[i];
    }
    return sum / bill.length;
}
console.log(promediobill(bill));
