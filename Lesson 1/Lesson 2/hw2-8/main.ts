// #UMoNq4biWGe
let day:string | null = prompt('Введіть день:');

if(day !== null){
    let dayNumber:number = Number(day);

    if (dayNumber>=1 && dayNumber <= 10){
        console.log('Перша декада');
    } else if (dayNumber>=11 && dayNumber <= 20){
        console.log('Друга декада');
    } else if (dayNumber>=21 && dayNumber <= 31){
        console.log('Третья декада');
    }else {
        console.log('Введене число поза межами 1–31');
    }
} else {
    console.log('Ввід скасовано');
}


