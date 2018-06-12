# Fizz-Buzz-Program-In-Javascript
Create a loop to Interate for 100 times and print "Fizz" for multiples of 3, "Buzz" for multiples of 5  &amp; "FizzBuzz" for multiples of 3 &amp; 5.
  
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
