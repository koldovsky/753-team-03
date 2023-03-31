(function(){
const form = document.querySelector('.faq__form');

const showError = () => {
  alert('Oops, something went wrong. Please try again later.');
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const { value: name } = document.querySelector('.input-name');
  const { value: email } = document.querySelector('.input-email');
  const { value: yogaStyle } = document.querySelector('select[name="yoga-style"]');
  const { value: message } = document.querySelector('textarea[name="message"]');

  fetch('https://formspree.io/f/mjvdrzzq', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, yogaStyle, message })
  })
  .then(response => {
    if (response.ok) {
      alert('Your request has been sent!');
      form.reset();
    } else {
      showError();
    }
  })
  .catch(error => {
    console.error('Error:', error);
    showError();
  });
}); 
})();