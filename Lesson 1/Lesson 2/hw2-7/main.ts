// #3ckURgvs
let time :string | null = prompt('Введіть чверть години:');

if(time !==null){
    let minute:number = Number(time);

    if (minute>=0 && minute <= 15){
        console.log('Перша частина години');
    } else if (minute>=16 && minute <= 30){
        console.log('Друга частина години');
    } else if (minute>=31 && minute <= 45){
        console.log('Третья частина години');
    }else if (minute>=46 && minute <= 59) {
        console.log('Четверта частина години');
    }else {
        console.log('Число поза межами 0–59');
    }
} else {
    console.log('Ввід скасовано');
}

