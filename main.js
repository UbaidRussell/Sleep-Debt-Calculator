function getSleepHours(day){
  switch (day){
    case 'sunday':
    return 8
    break;
    case 'monday':
    return 8
    break;
    case 'tuesday':
    return 8
    break;
    case 'wednesday':
    return 8
    break;
    case 'thursday':
    return 8
    break;
    case 'friday':
    return 8
    break;
    case 'saturday':
    return 8
    break;
  }
}

const getActualSleepHours = () => getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');

console.log(getActualSleepHours());
console.log(getSleepHours('monday'));
