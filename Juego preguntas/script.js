var questionNumber = 0;

const response = document.getElementById("response");

function calculateHowManyDaysAway(date) {
  const differenceInMilliseconds = date - new Date();
  const millisecondsInASecond = 1000;
  const diffecenceInSeconds = differenceInMilliseconds / millisecondsInASecond;
  const secondsInAMinute = 60
  const differenceInMinutes = diffecenceInSeconds / secondsInAMinute
  const minutesInAnHour = 60
  const differenceInHours = differenceInMinutes / minutesInAnHour
  const hoursInADay = 24
  const differenceInDays = differenceInHours / hoursInADay
  const howManyDaysAwayIsTheDate = differenceInDays;
  return Math.ceil(howManyDaysAwayIsTheDate);
};

function calculateNextBirthday() {
  let birthdayYear = new Date().getFullYear();
  const selectedBirthdayMonthElement = document.getElementById('months');
  const birthdayMonth = selectedBirthdayMonthElement.selectedIndex + 1;
  const birthdayDay = document.getElementById('birthdayDayAnswer').value;
  let birthdayDate = new Date(birthdayYear + "-" + birthdayMonth + "-" + birthdayDay);
  console.log(birthdayYear + "-" + birthdayMonth + "-" + birthdayDay);
  if (new Date() > birthdayDate){
    birthdayYear = birthdayYear +1
    birthdayDate = new Date(birthdayYear + "-" + birthdayMonth + "-" + birthdayDay);
  }
  response.innerText = 'Your birthday is ' + calculateHowManyDaysAway(birthdayDate) + ' days away.';
};

function calculateNextHoliday(){
  const holidays = document.getElementById('holidays');
  const favouriteHoliday = holidays.options[holidays.selectedIndex].value;
  let month = 1
  let day = 1
  switch(favouriteHoliday){
    case 'Chinese New Year':
      month = 1;
      day = 22;
      break;
    case 'Christmas':
      month = 12;
      day = 25;
      break;
    case 'Halloween':
      month = 10;
      day = 31;
      break;
    case 'Hannukah':
      month = 12;
      day = 7;
      break;
    case 'Kwanza':
      month = 12;
      day = 26;
      break;
    case 'New Year':
      month = 1;
      day = 1;
      break;
    case 'Ramadan':
      month = 3;
      day = 26;
      break;
    default:
      month = 1;
      day = 1;
  }
  const year = new Date().getFullYear()
  const holidayDate = new Date(year + "-" + month + "-" + day);
  const howManyDaysAwayIsHoliday = calculateHowManyDaysAway(holidayDate);
  response.innerText = favouriteHoliday + ' is ' + howManyDaysAwayIsHoliday +' days away';
}

function runChatbot() {
  event.preventDefault();
  const answer = document.getElementById("answer").value;
  const question = document.getElementById("question");
  if (questionNumber === 0) {
    response.innerText = "Your name is " + answer + ".";
    question.innerText = "When is your birthday?";
    document.getElementById("birthdayForm").style.visibility = "visible";
    document.getElementById("answerForm").style.visibility = "hidden";
  } else if (questionNumber === 1){
    calculateNextBirthday();
    question.innerText = "What is your favourite holiday?";
  }else if (questionNumber === 2){
    question.innerText = 'How old are you?'
    calculateNextHoliday();
  };
  questionNumber++;
};

const answerForm = document.getElementById('answerForm');

answerForm.addEventListener("submit", function (event) {
  runChatbot();
});

const birthdayForm = document.getElementById('birthdayForm');

birthdayForm.addEventListener("submit", function (event) {
  runChatbot();
});

const holidayForm = document.getElementById("holidayForm");
holidayForm.addEventListener('submit', function(event){
  runChatbot();
});