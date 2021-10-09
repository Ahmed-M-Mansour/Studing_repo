
const gradCalc = (studenScore = 0 , possibleScore = 100)=> {
    const grade = (studenScore / possibleScore) *100 ; 
    let litterGrade = '' ; 
    if(grade < 50 ) { 
        litterGrade = 'F'
    return ` you get a big ${litterGrade} (${grade})! `  ; 
    }
    else if(grade < 75 && grade > 50) {
        litterGrade = 'C'
    return ` you get a ${litterGrade}  (${grade})! `  ; 
    }
    else if(grade >= 75 && grade <= 90) {
        litterGrade = 'B' 
    return ` you get a ${litterGrade}  (${grade})! `  ; 
    }
    else 
    litterGrade = 'A' 
    return   ` you get a ${litterGrade}  (${grade})! `  ;  
}

console.log(gradCalc(75))

console.log(gradCalc(45))

console.log(gradCalc(95))

console.log(gradCalc(61)) 

console.log(gradCalc(12 , 30))

