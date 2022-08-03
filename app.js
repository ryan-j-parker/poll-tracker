const currentPollDiv = document.getElementById('current-poll-div');
const newPoll = document.getElementById('new-poll');
const previousPollsDiv = document.getElementById('previous-polls-div');
const savePollBtn = document.getElementById('save-poll-btn');

const optionOnePlus = document.getElementById('option-one-plus-btn');
const optionOneMinus = document.getElementById('option-one-minus-btn');
const optionTwoPlus = document.getElementById('option-two-plus-btn');
const optionTwoMinus = document.getElementById('option-two-minus-btn');



// let state
let question = '';
let optionOne = '';
let optionTwo = '';
let votesOne = 0;
let votesTwo = 0;
let previousPolls = [];

// set event listeners
newPoll.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(newPoll);

    const userQuestion = data.get('poll-question');
    const userOptionOne = data.get('option-one-input');
    const userOptionTwo = data.get('option-two-input');

    question = userQuestion;
    optionOne = userOptionOne;
    optionTwo = userOptionTwo;

    renderPoll();
    displayCurrentPoll();
});

function renderPoll(question, optionOne, optionTwo, votesOne, votesTwo) {
    const newPollEl = document.createElement('div');
    const questionEl = document.createElement('h3');
    const optionsEl = document.createElement('div');
    const optionOneEl = document.createElement('p');
    const optionTwoEl = document.createElement('p');
    const votesEl = document.createElement('div');
    const votesOneEl = document.createElement('p');
    const votesTwoEl = document.createElement('p');

    questionEl.textContent = question;
    optionOneEl.textContent = optionOne;
    optionTwoEl.textContent = optionTwo;
    votesOneEl.textContent = votesOne;
    votesTwoEl.textContent = votesTwo;

    newPollEl.classList.add('new-poll');

    optionsEl.append(optionOneEl, optionTwoEl);
    votesEl.append(votesOneEl, votesTwoEl);
    newPollEl.append(questionEl, optionsEl, votesEl);
    currentPollDiv.append(newPollEl);

    console.log(newPollEl);

    return newPollEl;  
  
}

function displayCurrentPoll() {
  currentPollDiv.textContent = '';
    const pollEl = renderPoll(question, optionOne, optionTwo, votesOne, votesTwo);
    currentPollDiv.append(pollEl);
  }

  

// get user input
// use user input to update state 
// update DOM to reflect the new state

optionOnePlus.addEventListener('click', () => {
    votesOne++;
    optionOnePlus.value = votesOne;
    displayCurrentPoll();
    console.log(votesOne);
});

optionOneMinus.addEventListener('click', () => {
    votesOne--;
    optionOneMinus.value = votesOne;
    displayCurrentPoll();
    console.log(votesOne);
});

optionTwoPlus.addEventListener('click', () => {
    votesTwo++;
    optionTwoPlus.value = votesTwo;
    displayCurrentPoll();
    console.log(votesTwo);
});

optionTwoMinus.addEventListener('click', () => {
    votesTwo--;
    optionTwoMinus.value = votesTwo;
    displayCurrentPoll();
    console.log(votesTwo);
});

savePollBtn.addEventListener('click', () => {
  const currentPollData = {
    question: question,
    optionOne: optionOne,
    optionTwo: optionTwo,
    votesOne: votesOne,
    votesTwo: votesTwo
  };
    previousPolls.push(currentPollData);
  console.log(currentPollData);


  question = '';
  optionOne = '';
  optionTwo = '';
  votesOne = 0;
  votesTwo = 0;

  currentPollDiv.textContent = '';
  previousPollsDiv.textContent = '';

  for (let poll of previousPolls) {
    const latestPoll = renderPoll(poll.question, poll.optionOne, poll.optionTwo, poll.votesOne, poll.votesTwo);
    previousPollsDiv.append(latestPoll);
    console.log(latestPoll);

  }

  displayCurrentPoll();
  refreshPollData();
}
);

function refreshPollData() {

}