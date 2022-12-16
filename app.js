const button = document.querySelector('button');

button.addEventListener('click', () => {
  // console.log('clicked');
  // When the button is clicked, change the styling of the .popUp so that the opacity: 1
  const popup = document.querySelector('.popUp');
  popup.classList.remove('popUp');
  popup.classList.add('.popUpTwo');
});

