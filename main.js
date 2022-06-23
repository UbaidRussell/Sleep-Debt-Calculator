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

function getActualSleepHours(){
  var sum = getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday')
    return sum;
}

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());
