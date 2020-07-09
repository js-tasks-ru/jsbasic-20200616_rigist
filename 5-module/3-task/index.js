function initCarousel() {
  // ваш код...
  //17-01  19-16

  

  let rButton = document.querySelector('.carousel__arrow_right');  

  let lButton = document.querySelector('.carousel__arrow_left');

  let LentaKar = document.querySelector('.carousel__inner');

  let i = 0;

  lButton.style.display = 'none';
  


  //console.log(  ((LentaKar.offsetWidth * i) + 'px')  );

  let ArrPosition = [0, 0, 0, 0];  
  let k = 1;
  for (let j = 1; j < ArrPosition.length; j++) {
    ArrPosition[j] =  -(LentaKar.offsetWidth * k) + 'px';
    k++;
  }
      
  //console.log(ArrPosition); //  

  

  rButton.addEventListener( "click" , () => {
                                            i++;
                                            lButton.style.display = '';
                                            LentaKar.style.transform = `translateX(${ArrPosition[i]})`;
                                            
                                            if (i == 3) {rButton.style.display = 'none';} 
                                           // if (i < 3) {}
                                            
                                            //console.log('r=',i);
                                            //console.log('r=', ArrPosition[i]);
                                            
                                            
                                            
                                            });

  lButton.addEventListener( "click" , () => {
                                            i--;
                                            rButton.style.display = '';
                                            LentaKar.style.transform = `translateX(${ArrPosition[i]})`;   //-${ArrPosition[i]}
                                           // if ((i >= 0) && (i <= 3)) {i--;} else {i = 0;}

                                            if (i == 0) {lButton.style.display = 'none';}
                                            //console.log('l=', i);
                                            //console.log('l=', ArrPosition[i] );
                                            
                                            });

  

  

}


// CSS класс элемента-ленты, в котором находятся все слайды - `.carousel__inner`

/* - `.carousel__arrow_right` - класс кнопки переключения на слайд вперёд;
- `.carousel__arrow_left` - класс кнопки переключения на слайд назад; */


/* let elem = document.querySelector('.toggle-text-button');

let divText =  document.querySelector('#text');

elem.addEventListener( "click" , () => { }); */



//--------  //const WidthOfSlide = ((LentaKar.offsetWidth * i) + 'px');

//let rSchetchik = WidthOfSlide;

//let lSchetchik = WidthOfSlide;
//---