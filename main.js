const getSleepHours = (day) =>{
  day = day.toLowerCase();
  if (day === 'sunday'){
    return 7
  } else if (day === 'monday'){
    return 8
  } else if (day === 'tuesday'){
    return 7
  } else if (day === 'wednesday'){
    return 8
  } else if (day === 'thursday'){
    return 7
  } else if (day === 'friday'){
    return 7
  } else if (day === 'saturday'){
    return 8
  } else {
    return 'you have entered a false date babes'
  }
}



const getActualSleepHours = () =>{
  return getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday')
}

const getIdealSleepHours = () =>{
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()

  if (actualSleepHours === idealSleepHours){
    console.log(`You have gotten the perfect amount of sleep hours.`)
  } else if (actualSleepHours > idealSleepHours){
    console.log(`You have gotten ${actualSleepHours - idealSleepHours} more sleep hours than needed`)
  } else if (actualSleepHours < idealSleepHours){
    console.log(`You have gotten ${idealSleepHours - actualSleepHours} hours less sleep than your ideal hours and should think about getting some more.`)
  }


}

calculateSleepDebt()
