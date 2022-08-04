const currentPollDiv = document.getElementById('current-poll-div');
const newPoll = document.getElementById('new-poll');
const previousPollsDiv = document.getElementById('previous-polls-div');
const savePollBtn = document.getElementById('save-poll-btn');

const optionOnePlus = document.getElementById('option-one-plus-btn');
const optionOneMinus = document.getElementById('option-one-minus-btn');
const optionTwoPlus = document.getElementById('option-two-plus-btn');
const optionTwoMinus = document.getElementById('option-two-minus-btn');

let question = '';
let optionOne = '';
let optionTwo = '';
let votesOne = 0;
let votesTwo = 0;
let previousPolls = [];

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

savePollBtn.addEventListener('click', () => {

    const currentPollData = {
        question: question,
        optionOne: optionOne,
        optionTwo: optionTwo,
        votesOne: votesOne,
        votesTwo: votesTwo
    };

    previousPolls.unshift(currentPollData);

    previousPollsDiv.textContent = '';

    refreshPollData();

    displayAllPolls();
    displayCurrentPoll();
}
);

optionOnePlus.addEventListener('click', () => {
    votesOne++;
    optionOnePlus.value = votesOne;
    displayCurrentPoll();
});

optionOneMinus.addEventListener('click', () => {
    votesOne--;
    optionOneMinus.value = votesOne;
    displayCurrentPoll();
});

optionTwoPlus.addEventListener('click', () => {
    votesTwo++;
    optionTwoPlus.value = votesTwo;
    displayCurrentPoll();
});

optionTwoMinus.addEventListener('click', () => {
    votesTwo--;
    optionTwoMinus.value = votesTwo;
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

    return newPollEl;
}

function displayCurrentPoll() {
    currentPollDiv.textContent = '';
    const pollEl = renderPoll(question, optionOne, optionTwo, votesOne, votesTwo);
    currentPollDiv.append(pollEl);
}

function refreshPollData() {
    currentPollDiv.textContent = '';
    previousPollsDiv.textContent = '';
    question = '';
    optionOne = '';
    optionTwo = '';
    votesOne = '';
    votesTwo = '';
}

function displayAllPolls() {
    previousPollsDiv.textContent = '';
    for (let poll of previousPolls) {
        const latestPoll = renderPoll(poll.question, poll.optionOne, poll.optionTwo, poll.votesOne, poll.votesTwo);
        previousPollsDiv.append(latestPoll);
    }
}