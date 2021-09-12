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
