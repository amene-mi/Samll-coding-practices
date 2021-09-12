  function leapYaer(year){
    if(isFinite(year)){
      if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0)){
        return year + " is a leap year";
      }
      else{
        return year + " is not a leap year";
      } 
    }
    else
    { 
      return "input is not number";
    }
  }
  console.log('9- check it is leap year: '+ leapYaer(2000));
