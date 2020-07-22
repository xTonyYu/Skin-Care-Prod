const validateInput = element => {
    let response = {
        isValid: false,
        message: ''
    }

    if (element.value.length === 0) {
        response.message = 'Required field';
    } else {
        response.isValid = true;
    }
    return response;
}

const contactEl = document.getElementById('sign-this');

contactEl.addEventListener('submit', e => {
  e.preventDefault();
  contactEl.querySelectorAll('input, textarea').forEach( el => {
      let inputEl = contactEl.querySelector('input');
      let errorEl = el.parentElement.firstElementChild;
    
      let validationResponse = validateInput(el);
      if (!validationResponse.isValid) {
          // inputEl.classList.remove('hidden');
          errorEl.innerText = validationResponse.message;
          errorEl.classList.remove('hidden');
      } else {
          errorEl.classList.add('hidden');
      }
  })
})