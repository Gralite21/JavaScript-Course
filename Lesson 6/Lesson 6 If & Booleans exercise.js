const name = 'Tim';

const hour = 21;

if (hour >=6 && hour <=12){
    console.log(`Good Morning ${name}`);
} else if (hour > 12 && hour <= 17){
    console.log(`Good Afternoon ${name}`);
} else {
    console.log(`Good Night ${name}`);
}


const timeHour = 13;

if ( timeHour >= 6 && timeHour <= 12){
    console.log(`Good Morning ${name}`);
} else if (timeHour > 12 && timeHour <= 17){
    console.log(`Good Afternoon ${name}`);
} else {
    console.log(`Good Night ${name}`);
}



const age = 5;
const isHoliday = true;


if ((age <=6 || age >=65) && !isHoliday ) {     // && higher priority then || so  I need to add brackets
    console.log('Discount');
} else {console.log('No Discount');
}
