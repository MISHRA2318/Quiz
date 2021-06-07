// this is used to store the inner html of button by calling it by id.
//Here x is the variable that store the innertext of id.

var x = document.getElementById("start-btn");

//then we put an addEventListener (click) and in that eventListener we pass the function
x.addEventListener("click", startGame);


var nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", ()=>{
    currentQuestion++;
    setNextquestion()
})
//Here y is the variable that store the innertext of id. of question's.

var y = document.getElementById("question-container");

//here a and b are declared for storing question and answer text.
var a = document.getElementById("question");
var b = document.getElementById("ans-button");

//we need that our questions get shuffled when they are clicked on start button.
//so here we declared a two variabels.
var shuffleQuestion, currentQuestion;

//the function which is passed in EventListener is declared here ,





function startGame() {
  //we will add the class to target id element by adding the property ".classList".which is declared in css.
  //we added hide class to var x just because to hide the button of start form the question-container.
  x.classList.add("hide");

  //for this we will sort the questions array. for not geting negatie value we substract the random no by 0.5.
  shuffleQuestion = questions.sort(() => Math.random() - 0.5);
  // and initilizing the currentQuestion to 0.
  currentQuestion = 0;

  //when we click the button it removes the hide class and displays the question.
  y.classList.remove("hide");
  // then in this funtion we pass an another function of setNextquestion , this will call the function.
  setNextquestion();
}




















function setNextquestion() {
  resetState();
  showQuestion(shuffleQuestion[currentQuestion]);
}

//showQuestion passed the value as the parameter and "question" takes that parameter
function showQuestion(question) {
  //Now we will change the inner text of a (that is an targetd id of question).this  ".question " will fetch
  // values from the parameter an print it on the screen.
  a.innerText = question.question;
  //here we passed forEach loop ,this will run the loop for each and every element.
  question.answers.forEach((answer) => {
    const button = document.createElement("button"); //here we create an button element n constant props.
    button.innerText = answer.text; //then in that button we insert the inner text ,answer
    button.classList.add("btn"); //we added btn class to this button just because to give it a css of that class.

    //if our answer is correct
    if (answer.correct) {
      //then data will be stored in datasets.this property can read the element but cannot write .
      button.dataset.correct = answer.correct;
      //if the condition is true , it will display tha answer
    }

    //we added the class button ,on that button we had putted an eventlistener function.
    //when user will click it , it will call the selectAnswer function.
    button.addEventListener("click", selectAnswer);
    //the new posttion will gets appended , by passing the values in the innerText of b.
    b.appendChild(button);
  });
}

function resetState() {
    clearStatusClass(document.body)
  //we will pass the hide class in nextButton and hide that button.
  nextButton.classList.add("hide");
  // if id( answer-button) has already element in it ,it will remove the  already elements.
  while (b.firstChild) {
    b.removeChild(b.firstChild);
  }
}

 




















//Select Answer function

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(b.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if(shuffleQuestion.length > currentQuestion+ 1){
    nextButton.classList.remove("hide");
  }else{
      x.innerText='Restart';
      x.classList.remove('hide');
  }
  
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}















// We have to declare the quiz question , first in the form of array then make it an object.
//here we maked an questions array.



const questions = [
  {
    //we write the question followed by a (colon :).
    question: "What is 2 + 2 ",
    //for passing answer we have to pass it in an array.
    answers: [
      { text: "4", correct: true },
      { text: "24", correct: false },
      
    ],
  },

  {
      question: "What is 4 * 2",
      answers: [
        { text: "4", correct: true },
        { text: "8", correct: false },
      ],
  },

  {
    question: "Who is the First Prime Minister ",
    answers: [
      { text: "Indira Gandhi", correct: false },
      { text: "Jawaharlal Nehru", correct: true },
      { text: "N . Subhash Chandra", correct: false },
      { text: "Prathibha Patel", correct: false },
    ],
},

{
    question: "Who is the First Prime Minister ",
    answers: [
      { text: "Indira Gandhi", correct: false },
      { text: "Jawaharlal Nehru", correct: true },
      { text: "N . Subhash Chandra", correct: false },
      { text: "Prathibha Patel", correct: false },
    ],
},

{
    question: "Vice-President of India",
    answers: [
      { text: "M Venkaiah Naidu", correct: true },
      { text: "Mafuja Khatun", correct: false },
      { text: "Anandiben Patel", correct: false },
      { text: "Rajendra Kumar Tiwari", correct: false },
    ],
},



];
