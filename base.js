// get the form element
const form = document.querySelector('form');

// add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // prevent the default submit action
  event.preventDefault();

  // get the form data
  const formData = new FormData(form);

  // send the email using fetch
  fetch('/send-email', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      // handle the response
      if (response.ok) {
        // show a success message
        alert('Email sent successfully');
      } else {
        // show an error message
        alert('There was a problem sending the email');
      }
    })
    .catch((error) => {
      // show an error message
      alert('There was a problem sending the email');
      console.error(error);
    });
});
