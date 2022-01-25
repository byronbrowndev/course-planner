
document.querySelectorAll(".gradeBox").forEach(b => b.value === '' ? (b.value = 'A') : '');
document.querySelectorAll(".gradeBox").forEach(b => addEventListener('keypress', recalculate))
displayGPA(calculate());

function recalculate({ key, target }, end = false) {
  const highKey = key.toUpperCase();
  target.value = highKey;
  const isLetterGrade = (highKey === 'A' || highKey === 'B' || highKey === 'C' || highKey === 'D' || highKey === 'F');
  displayGPA(isLetterGrade ? calculate(highKey) : [null, null]);
  if (!end) focusNext(target);
}

function focusNext(currentEl) {
  const elementIndex = Number(currentEl.id.replace('gradeBox', ''));
  const nextElementId = 'gradeBox' + (elementIndex + 1)
  document.querySelector('#' + nextElementId)?.focus()
}


function displayGPA([projectedFinalGPA, gpaOfNewClasses]) {
  if (projectedFinalGPA && gpaOfNewClasses) {
    // document.querySelector('#bigGPA').innerHTML = gpaOfNewClasses.toFixed(3);
    document.querySelector('#totalGPA').innerHTML = projectedFinalGPA.toFixed(3);
  }
}

function calculate(grade = 'A') {
  // console.log('finishing calc with a: ', grade.toUpperCase())
  const creditUnits = accumulateCredits(); // for 22 class
  const bgsuCreditUnitsPre2020 = 96;
  const bgsuCreditPointsPre2020 = 215;
  const creditsErasedByForgiveness = 26;
  const pointsErasedByForgiveness = 17;
  const pointsEarned = accumulatePoints();
  const gpaOfNewClasses = pointsEarned / creditUnits;
  // console.log(`${pointsEarned}/${creditUnits} equal GPA of ${gpaOfNewClasses}`);
  // document.querySelector('#bigGPA').innerHTML = gpa.toFixed(3);

  // 96 is the current GPA credit - subracting 26 rids credit from 3 F's(9 credits) and 6 D's(17 credits)(one 'D' is a 2 credit)
  const projectedFinalUnitTotal = ((bgsuCreditUnitsPre2020 - creditsErasedByForgiveness) + creditUnits);
  // 215 is the current GPA points - subtracting 17 rid points from 6 D's(17 points)(one 'D' is a 2 points)
  const projectedFinalPointTotal = ((bgsuCreditPointsPre2020 - pointsErasedByForgiveness) + pointsEarned);

  const projectedFinalGPA = projectedFinalPointTotal / projectedFinalUnitTotal;
  // document.querySelector('#totalGPA').innerHTML = totG.toFixed(3);

  return [projectedFinalGPA, gpaOfNewClasses];
}

function accumulatePoints() {
  const accumulatedPoints = [...document.querySelectorAll(".gradeBox")].reduce((totalPoints, gradeElement) => (getPoints(gradeElement) + totalPoints), 0)
  console.log('total points are: ', accumulatedPoints)
  return accumulatedPoints
}

function accumulateCredits() {
  return document.querySelectorAll('.gradeBox').length * 3
}

function getPoints(gradeElement) {
  const grade = gradeElement.value.toUpperCase();
  switch (grade) {
    case 'A':
      return 4 * 3;
    case 'B':
      return 3 * 3;
    case 'C':
      return 2 * 3;
    case 'D':
      return 1 * 3;
    case 'F':
      return 0;
    default:
      gradeElement.value = 'A';
      return 4 * 3;
  }
}

function getHeader([season, yearAsString]) {
  year = Number(yearAsString);
  switch (season) {
    case 'Summer':
      return 'Fall ' + year;
    case 'Spring':
      return 'Summer ' + year;
    default:
      return 'Spring ' + (year + 1);
  }
}

function addCourse(e, s) {
  if ('preventDefault' in e) e.preventDefault();
  const semesterDiv = !!s ? s : document.querySelector('#semesterGroup' + Number(this.id.replace('semesterButton', '')))
  const semesterId = semesterDiv.id;
  const courseGroupId = '#courseGroup' + Number(semesterId.replace('semesterGroup', ''));
  const courseGroupDiv = document.querySelector(courseGroupId);

  numberOfCourses = document.querySelectorAll('#' + semesterId + ' ' + '.gradeBox').length;
  console.log(numberOfCourses)
  if (numberOfCourses <= 4) {
    const newCourse = document.createElement('input');
    newCourse.type = 'text'
    newCourse.maxLength = '1';
    newCourse.size = '3';
    newCourse.name = ''
    newCourse.id = 'gradeBox' + (document.querySelectorAll('.gradeBox').length + 7);
    newCourse.className = 'gradeBox added';
    // newCourse.value = 'A';

    courseGroupDiv.appendChild(newCourse)
    recalculate({ key: 'A', target: this }, true);
    console.log(numberOfCourses)
  }

  if (++numberOfCourses === 5) {
    this.style.display = 'none';
  }
}

function addSemester(e) {
  e.preventDefault();
  const newSemester = document.createElement('div');
  const semesterIndex = document.querySelectorAll('.semesterGroup').length + 1;
  const lastSemesterTitleTuple = document.querySelector('#semesterGroup' + (semesterIndex - 1) + ' h3').innerText.split(' ');
  const newSemesterTitle = getHeader(lastSemesterTitleTuple);
  newSemester.id = 'semesterGroup' + semesterIndex;
  newSemester.className = 'semesterGroup';

  newSemester.innerHTML = `
    <h3>${newSemesterTitle}</h3>
    <div id="courseGroup${semesterIndex}" class="courseGroup"></div>
    <button class="addCourse" id="semesterButton${semesterIndex}">Add Course</button>
  `
  document.querySelector('#grades').appendChild(newSemester);
  addCourse({}, newSemester);
  document.querySelector('#semesterButton' + semesterIndex).addEventListener('click', addCourse)
}

const addCourseButton = document.querySelector('.addCourse');
const addSemesterButton = document.querySelector('.addSemester');

addCourseButton.addEventListener('click', addCourse);

addSemesterButton.addEventListener('click', addSemester);
