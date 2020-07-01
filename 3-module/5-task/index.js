/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // ваш код...0-35
  let result = {
    min: null,
    max: null
  }

  let ArrStr = str.split(/\,| /g);
  let NumArrStr = [];
  let bool = true;

  //console.log(ArrStr); //---

  NumArrStr = ArrStr.filter(item => {if (Number(item)){return Number(item);}});

  NumArrStr = NumArrStr.map(item => {return Number(item)});

  //console.log(NumArrStr)//--

  result.min = NumArrStr[0];
  result.max = NumArrStr[0];


  for (let i = 0; i < NumArrStr.length; i++) {
    

      if (NumArrStr[i] < result.min){
        result.min = NumArrStr[i];
        //console.log(2); //--
      }

      if(NumArrStr[i] > result.max){
        result.max = NumArrStr[i];
        //console.log(3);//--
      }

    }
    
 

  return result; 
}