const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    tabContents.forEach(tabContent => {
      if (tabContent.id === tabId) {
        tabContent.classList.remove('hidden');
      } else {
        tabContent.classList.add('hidden');
      }
    });

    tab.classList.add('active');
  });
});

const words = document.querySelectorAll('.word');
let currentWord = 0;

function showNextWord() {
  // hide current word
  words[currentWord].style.display = 'none';
  // update current word index
  currentWord = (currentWord + 1) % words.length;
  // show next word
  words[currentWord].style.display = 'inline-block';
}

// show first word initially
words[currentWord].style.display = 'inline-block';
// schedule showing of next word every 2 seconds
setInterval(showNextWord, 2000);

<!--contact form-->

const scriptURL = 'https://script.google.com/macros/s/AKfycbz6ZfDpyWiDUXvTC6tPKjBoy0ikCF0Mf6VklEUhEF-UWHtkiU3jL6sZOMBnOpG1nMeg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
