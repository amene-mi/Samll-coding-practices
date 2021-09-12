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