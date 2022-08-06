export function renderPoll(question, optionOne, optionTwo, votesOne, votesTwo) {

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
    optionsEl.classList.add('options');
    votesEl.classList.add('votes');
    votesOneEl.classList.add('votes-one');
    votesTwoEl.classList.add('votes-two');
    optionOneEl.classList.add('option-one');
    optionOneEl.classList.add('option-one');

    optionsEl.append(optionOneEl, optionTwoEl);
    votesEl.append(votesOneEl, votesTwoEl);
    newPollEl.append(questionEl, optionsEl, votesEl);

    return newPollEl;
}
