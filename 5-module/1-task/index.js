function hideSelf() {
  // ваш код...

  let elem = document.querySelector('.hide-self-button');

  elem.addEventListener( "click" , () => document.querySelector('.hide-self-button').hidden = true);
}
