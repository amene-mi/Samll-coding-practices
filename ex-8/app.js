  function even_digit (number) {
    if(isFinite(number)){
        if(number % 2 == 0){
           return number; 
         }
         else
         { 
             return "not even";
         }
    }
    else
    { 
        return "input is not number";
    }
  }
   
  console.log('8- check it is even: '+ even_digit("uyet"));
