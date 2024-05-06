//Función que imprime todos los números del 1 al 1000 por consola. En los múltiplos de 3, imprime 'Fizz'
//en los múltiplos de 5:'Buzz'; y en los que sean múltiplos de 3 y de 5 simulatáneamente: 'FizzBuzz'.

const FizzBuzz = () => {
    for (let i= 1; i <= 1000; i++) {
        if (i%3 === 0 && i%5 === 0) {
            console.log('FizzBuzz');
        } else if (i%5 === 0) {
            console.log('Buzz');
        } else if (i%3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
  };
  