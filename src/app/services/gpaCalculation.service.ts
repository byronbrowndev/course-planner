import { Injectable } from "@angular/core";

@Injectable()
export class GpaCalculationService {
    currentGpa(credits: number, points: number) {
        const gpa =  points/credits;
        return gpa;
    }

}



// function recalculate({ key, target }) {
//     const highKey = key.toUpperCase();
//     target.value = highKey;
//     const isLetterGrade = (highKey === 'A' || highKey === 'B' || highKey === 'C' || highKey === 'D' || highKey === 'F');
//     displayGPA(isLetterGrade ? calculate(highKey) : [null, null]);
//     focusNext(target);
// }

// function focusNext(currentEl) {
//     const elementIndex = Number(currentEl.id.replace('gradeBox', ''));
//     const nextElementId = 'gradeBox' + (elementIndex + 1)
//     document.querySelector('#'+ nextElementId).focus()
// }


// function displayGPA([projectedFinalGPA, gpaOfNewClasses]) {
//     if (projectedFinalGPA && gpaOfNewClasses) {
//         document.querySelector('#bigGPA').innerHTML = gpaOfNewClasses.toFixed(3);
//         document.querySelector('#totalGPA').innerHTML = projectedFinalGPA.toFixed(3);
//     } 
// }

// function calculate(grade) {
//     console.log('finishing calc with a: ', grade.toUpperCase())
//     const creditUnits = 72; // for 24 class
//     const pointsEarned = accumulatePoints();
//     const gpaOfNewClasses = pointsEarned/creditUnits;
//     console.log(`${pointsEarned}/${creditUnits} equal GPA of ${gpaOfNewClasses}`);
//     // document.querySelector('#bigGPA').innerHTML = gpa.toFixed(3);

//     const projectedFinalUnitTotal = ((105-26)+creditUnits);
//     const projectedFinalPointTotal = ((239-17)+pointsEarned);

//     const projectedFinalGPA = projectedFinalPointTotal/projectedFinalUnitTotal;
//     // document.querySelector('#totalGPA').innerHTML = totG.toFixed(3);

//     return [projectedFinalGPA, gpaOfNewClasses];
// }

// function accumulatePoints() {
//     const accumulatedPoints = [...document.querySelectorAll(".gradeBox")].reduce((totalPoints, gradeElement) => (getPoints(gradeElement) + totalPoints), 0)
//     console.log('total points are: ', accumulatedPoints)
//     return accumulatedPoints
// }

// function getPoints(gradeElement) {
//     const grade = gradeElement.value.toUpperCase();
//     switch (grade) {
//         case 'A':
//             return 4 * 3;
//         case 'B':
//             return 3 * 3;
//         case 'C':
//             return 2 * 3;
//         case 'D':
//             return 1 * 3;
//         case 'F':
//             return 0;
//         default:
//             gradeElement.value = 'A';
//             return 4 * 3;
//     }
// }