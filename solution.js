  
    "use strict"
    for (let i = 0; i < 100 ;i++)  {
      if (i > 3) {
        if (i % 3 === 0) {
          console.log(i + 'Fizz');
        }
        if(i % 5 === 0){
          console.log(i + 'buzz');
        }
        if(i % 3 === 0 && i % 5 === 0){
          console.log(i + 'FizzBuzz');
        }
      } 
    } 
