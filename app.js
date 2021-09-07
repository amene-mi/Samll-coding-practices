//1
let arr = [];
for(let i=1;i<10;i++)
{
    arr.push(i);
    console.log(arr);
}
//2
function convertToInt(param) {
  /*  if (isNaN(param)) {
        return 0;
    }
    else
    {
        return parseInt(param,0);
    }
    if (Number.isInteger(param)){
      return param;
    }
    else
    {
      return parseInt(param);
    }*/
    if (isFinite(param)){
      return param;
    }
    else 
    return param;
  }

console.log('2- convert To Int: '+convertToInt(null));

//3
let str = "Hello World!";

    const stringToLowerCase = function(str) {
    return str.toLowerCase();
  };
  
  console.log('3- string to LowerCase: '+stringToLowerCase("Hello World!"));

  //4
  const string = 'Array';

  console.log( '4- string convert to an array: '+[...string]);

  //5
  const strlen = function(str) {
    return str.length;
  };
  
  console.log('5- get string Lenght: '+strlen("Hello World!"));

  //6

  function shortWord (str) {
    const strArr = str.split(" ");
    var shortLen = strArr[0].length;
    for(var i = 0; i < strArr.length; i++){
        if(strArr[i].length < shortLen){
            shortLen = strArr[i].length;
         }
      }
    return shortLen;
  }

  console.log('6- find the shortest word in string: '+ shortWord("Create a function to accept a string and return the size of its smallest word."));

  //7
  console.log(
"A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc."+
"\n When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function."+
"\n Any functions that are called by that function are added to the call stack further up, and run where their calls are reached."+
"\n When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing."+
"\n If the stack takes up more space than it had assigned to it, it results in a \"stack overflow\" error.");
function greeting() {
  sayHi();
}
function sayHi() {
  return "Hi!";
}
greeting();

  //8
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

  //9
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

  //10

const product_count = function() {
  let proCount=50;
  function changeby(val){
    proCount +=val;
  }
  return {
    increase: function(newCount) {
      if(newCount === undefined){
        proCount +=1;
      }
      else if(newCount>proCount){
        proCount=newCount;
      }
      else{
         proCount=proCount;
      }
    },

   decrease: function() {
    proCount -=1;
    },
    decrease: function(newCount) {
      if(newCount === undefined){
        if(proCount>0){
        proCount -=1;
        }
        else
        proCount=0;
      }
      else if(newCount<proCount && newCount>=0){
        proCount=newCount;
      }
      else{
        proCount=proCount;
      }
    },
    value:function(){
      return proCount;
    }  
  }
};

var product = product_count();
product.increase(60); 
console.log('10- product count: '+ product.value());         
product.increase();
console.log('10- product count: '+ product.value());  
product.decrease(30);      
console.log('10- product count: '+ product.value()); 
product.decrease(); 
console.log('10- product count: '+ product.value()); 

//11
let messageBag={
  exceptions:{
    1:{
      num: 1009,
      message: "Network Connection Error!"
    },
    2:{
      num: 1002,
      message: "User is not logged-in."
    }
  }  
};
function prettyPrintMessageLog(obj){
  var date= new Date();
  
  for(let item in obj.exceptions){
    console.log('11- '+ date.toString() +' Error Number: '+ obj.exceptions[item].num+' '+obj.exceptions[item].message); 
  }
}

prettyPrintMessageLog(messageBag);

//12
let parsed = `{
  "meetups": [
    {
      "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
      "title": "ocean at dusk",
      "color": "#00c4e2",
      "rating": 5
      },
      {
      "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
      "title": "lawn",
      "color": "#26ac56",
      "rating": 3
      },
      {
      "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
      "title": "bright red",
      "color": "#ff0000",
      "rating": 0
      }
  ]
}`;


console.log('11- parsed',parsed);