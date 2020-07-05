function toggleText() {
  // ваш код...

  let elem = document.querySelector('.toggle-text-button');

  let divText =  document.querySelector('#text');

  elem.addEventListener( "click" , () => {
                                          if (divText.hidden == false){
                                            divText.hidden = true;
                                          } else {
                                            divText.hidden = false;
                                          }
                                        });


}
