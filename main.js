const a = () => {
  var button = document.querySelector('.button');
  var texts = document.querySelectorAll('.text');

  button.addEventListener('click', () => {
    texts.forEach(text => {
      text.classList.remove('hidden');
    })
  })
}

a();