const handleShowText = () => {
  const button = document.querySelector('.button');
  const texts = document.querySelectorAll('.text');

  button.addEventListener('click', () => {
    const isActive = button.dataset.active === 'true';

    button.dataset.active = !isActive;

    texts.forEach(text => {
      isActive
      ? text.classList.add('hidden')
      : text.classList.remove('hidden')
    })
  })
}

handleShowText();