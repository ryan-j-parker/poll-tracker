## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## HTML elements only do 3 things

store user input
listen for events
we inject DOM elements into them (`mainEl.append(childEl)`)

## HTML Setup

3 inputs (question, answerA, answerB)

- why? so we know the questions and answers the user typed
- how? for form `<input>`s (`<select>`, `<textarea>`), it's always `.value`. for div, section, main etc, it's always `.textContent`. Here, we can use `myInput.value`

"start poll" button

- why? so we know when to do the start poll logic
- how? `button.addEventListener()`

"vote A" button

- why? so we know when to do the vote A logic
- how? `button.addEventListener()`

"vote B" button

- why? so we know when to do the vote B logic
- how? `button.addEventListener()`

"publish poll" button

- why? so we know when to do the publish poll logic
- how? `button.addEventListener()`

section for current poll
- why? a place to inject a DOM element for the current poll
- how?
  -`const pollEl = renderPoll(some, data, goes, here)`
  - `pollSectionEl.append(pollEl)`

section for past polls list
- why? a place to inject DOM elements for each past poll in our past polls array
- how?
  - displayPolls(), `for (let poll of poll) { render and append here }

## State

- current poll votes A
 @@ -59,19 +60,23 @@ we inject DOM elements into them (`mainEl.append(childEl)`)
- past polls [{}, {}, {}]

## Events

click "start poll"

- what happens when the user clicks "start poll?"

- the question and possible answers show up at the top
  - DATA: we grab what the user typed (inputEl.value) for all three inputs
  - DATA: we put that data in state so we can remember it for later
  - (DOM: clear out the old poll)
  - DOM: use the renderPoll function to render and append our poll

click "vote A"
- DATA: increment the votes for that item
- DOM: show the use the new votes value in the DOM

click "vote B"
- DATA: increment the votes for that item
- DOM: show the use the new votes value in the DOM

click "publish poll"
- the current question gets cleared out and we see that question added to the past poll results list
  - DATA: make a new poll object { answerA, answerB, question, votesA, votesB }

