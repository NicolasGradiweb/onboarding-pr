const handleShowText = () => {
  const button = document.querySelector('.button');
  const texts = document.querySelectorAll('.text');

  button.addEventListener('click', () => {
    texts.forEach(text => {
      text.classList.remove('hidden');
    })
  })
}

handleShowText();