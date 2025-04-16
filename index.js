
const marks =[80, 80, 50, 80, 70];
console.log(calculateGrade(marks));

function calculateGrade(marks){
    let sum = 0;
   
   for(let i =0; i < marks.length; i++){
    sum += marks[i];
   }
   let Average = sum / marks.length ;
   if(Average >=0 && Average <= 59){
     return 'C';
    }
   else if(Average >=60 && Average <= 69){
    return'D';
   }
   else if(Average >=70 && Average <= 79){
    return'C';
   }else if(Average >=80 && Average <= 89){
    return'B';
   }else if(Average >=90 && Average <= 100){
    return'A';
   }
   else{
    return 'the averge is not correct ';
   }
   
}
