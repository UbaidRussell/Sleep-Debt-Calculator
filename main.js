//random for testing
function getSleepHours(day){
  switch (day){
    case 'sunday':
    return 8
    break;
    case 'monday':
    return 8
    break;
    case 'tuesday':
    return 7
    break;
    case 'wednesday':
    return 8
    break;
    case 'thursday':
    return 7
    break;
    case 'friday':
    return 7
    break;
    case 'saturday':
    return 7
    break;
  }
}


//gets actual sleep hours
const getActualSleepHours = () => getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');
//Gets ideal sleep hours
const getIdealSleepHours = () =>{
  const idealHours = 8;
  return idealHours * 7;
}

//This function calcauloates our sleep debt
const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
    console.log('You got' + (idealSleepHours - actualSleepHours) + ' hours of perfect sleep.')
  } 
  else if (actualSleepHours > idealSleepHours){
    console.log('You got' +(idealSleepHours - actualSleepHours) + ' hours more than needed.');
  }
  else if(actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less than needed. You should get some rest.');
  } 
}




//Test
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
console.log(calculateSleepDebt());
