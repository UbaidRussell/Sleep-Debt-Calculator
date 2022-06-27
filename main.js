//random for testing
function getSleepHours(day){
  switch (day){
    case 'sunday':
    return 7
    break;
    case 'monday':
    return 7
    break;
    case 'tuesday':
    return 5
    break;
    case 'wednesday':
    return 8
    break;
    case 'thursday':
    return 7
    break;
    case 'friday':
    return 6
    break;
    case 'saturday':
    return 7
    break;
  }
}
//Gets ideal sleep hours
const getIdealSleepHours = () =>{
  const idealHours = 8;
  return idealHours * 7;
}

//gets actual sleep hours
const getActualSleepHours = () => getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');

//Test
console.log(getActualSleepHours());
console.log(getSleepHours('monday'));
console.log(getIdealSleepHours);
