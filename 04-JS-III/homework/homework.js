// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var largo = (array.length);
  return array[largo - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var largo = (array.length);
  for (let i=0; i < largo; i++) {
    array[i] = array[i] + 1;
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var concat = '';
  for (let i=0; i < palabras.length; i++) {
    concat += palabras[i] + ' ';
  }
  concat = concat.slice(0, -1);
  return concat
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var largo = array.length;
  for (let i=0; i < largo; i++) {
    if (array[i] === elemento) {
      return true
    } 
  }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var largo = numeros.length;
  var total = 0;
  for (let i=0; i < largo; i++) {
    total = total + numeros[i]
  }
  return total
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var largo = resultadosTest.length;
  var total = 0;
  for (let i=0; i < largo; i++) {
    total = total + resultadosTest[i]
  }
  total = (total/largo);
  return total
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = -999999;
  for (let i=0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var cantParametros = arguments.length;
  var mult = 1;
  if (cantParametros === 0) {
    return 0
  } else if (cantParametros === 1) {
    return arguments[0]
  } else {
    for (i = 0; i < cantParametros; i++) {
      mult *= arguments[i]
    }
    return mult
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var largo = arreglo.length;
  var cont = 0;
  for (let i=0; i < largo; i++) {
    if (arreglo[i] > 18) {  
      cont++
    } 
  }
  return cont
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana"
  } else return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var cadena = n.toString();
  if (cadena.startsWith('9')) {
    return true
  } else return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  var flag = true;
  var i = 0;
  while ((i < arreglo.length) && (flag)) {
    if (arreglo[i] !== arreglo[0]) {
      flag = false
    }
    i++;
  }
  return flag
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var NuevoArreglo = [];
  var flagE = false;
  var flagM = false;
  var flagN = false;
  var largo = array.length;

  for (let i=0; i < largo; i++) {
    if (array[i] === "Enero") {
      NuevoArreglo.push(array[i]);
      flagE = true;
    }
    if (array[i] === "Marzo") {
      NuevoArreglo.push(array[i]);
      flagM = true;
    }
    if (array[i] === "Noviembre") {
      NuevoArreglo.push(array[i]);
      flagN = true;
    }
  }

  if (flagE && flagM && flagN) {
  return NuevoArreglo
  } else {
    return "No se encontraron los meses pedidos"
  }

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var largo = array.length;
  var nArray = [];
  for (let i=0; i < largo; i++) {
    if (array[i] > 100) {  
      nArray.push(array[i]);
    } 
  }
  return nArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i = 0;
  var nArray = [];
  var flag = false;

  while (i < 10) {
    numero = numero + 2;
    nArray[i] = numero;
    i++;
    if (numero === i) {
      flag = true;
      break;
    }
  }
  
  if (flag) {
    return "Se interrumpió la ejecución"
  } else {
    return nArray
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var i = 1;
  var nArray = [];
  var suma = numero;

  while (i <= 10) {
    if (i === 5) {
      i++;
      continue;
    } else {
    suma = suma + 2;
    nArray.push(suma);
    i++;
    }
  }
  return nArray
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
