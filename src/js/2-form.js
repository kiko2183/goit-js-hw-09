document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const formData = {
    email: '',
    message: '',
  };

  function updateFormData() {
    formData.email = emailInput.value;
    formData.message = messageInput.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    emailInput.value = parsedFormData.email;
    messageInput.value = parsedFormData.message;
  }

  form.addEventListener('input', updateFormData);

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (formData.email === '' || formData.message === '') {
      alert('Please fill out all fields.');
    } else {
      console.log(formData);
      localStorage.removeItem('feedback-form-state');
      emailInput.value = '';
      messageInput.value = '';
    }
  });
});
