const inputName = document.querySelector('#inputName');
const spanName = document.querySelector('.spanName');
const NameEmpty = document.querySelector('.NameEmpty');
const inputNumber = document.querySelector('#inputNumber');
const spanNumber = document.querySelector('.spanNumber');
const WrongFormat = document.querySelector('#WrongFormat')
let errrColor = document.querySelector('.errorColor')

const exp_date_1 = document.querySelector('.exp-date_1');
const exp_date_2 = document.querySelector('.exp-date_2');
const spanDateMM = document.querySelector('.spanDateMM');
const spanDateYY = document.querySelector('.spanDateYY');
const notBlankExpDate = document.querySelector('#notBlankExpDate');

const cvc = document.querySelector('#cvc');
const cvcDetails = document.querySelector('.cvcDetails');
const notBlankCVC = document.querySelector('#notBlankCVC');
const cvcColorError = document.querySelector('.cvcColorError');



inputName.addEventListener("keyup", () => {
  console.log(inputName.value);
  let upperSpanName= inputName.value;
  spanName.innerHTML = upperSpanName.toUpperCase();
  inputName.value = upperSpanName.toUpperCase();

  if(spanName.textContent.length == 0){
    spanName.innerHTML = "NAME";
}
});

inputNumber.addEventListener("keyup", () => {

  let numberValue = inputNumber.value;
  let numsStr = numberValue.replace(/[^0-9]/g,'');

  if(numberValue.length === 4  || numberValue.length === 9 || numberValue.length === 14 ){
    inputNumber.value += ' ';
  }

  if(numberValue.length >= 6 ){

    numsStr = numsStr + 2;
    WrongFormat.classList.remove('hide');

  } if(numberValue.length >= 10){

    numsStr = numsStr + 2;
    WrongFormat.classList.remove('hide');

  } if(numberValue.length >= 15){

    numsStr = numsStr + 2;
    WrongFormat.classList.remove('hide');

  } else {

    WrongFormat.classList.add('hide');

  }

  if(numsStr.length !== numberValue.length){

    WrongFormat.classList.remove('hide');
    errrColor.classList.add('focusInputNumber');
  } else {

    WrongFormat.classList.add('hide');
    errrColor.classList.remove('focusInputNumber');

  }

  spanNumber.innerHTML = numberValue;
  if(spanNumber.textContent.length == 0){
    spanNumber.innerHTML = "0000 0000 0000 0000";
  }
});

exp_date_1.addEventListener("keyup", () => {

  let expDateValue = exp_date_1.value;

  let expDateValueNumber = expDateValue.replace(/[^0-9]/g,'');
  if (expDateValueNumber > 31) {
    expDateValueNumber = 31;
  }

  exp_date_1.value = expDateValueNumber;
  spanDateMM.innerHTML = expDateValueNumber;

  if(expDateValueNumber.length === 0){
    notBlankExpDate.classList.remove('hide');
    exp_date_1.classList.add('focusInputNumber');
    spanDateMM.innerHTML = "00";
  } else {
    notBlankExpDate.classList.add('hide');
    exp_date_1.classList.remove('focusInputNumber');
  }

});


exp_date_2.addEventListener("keyup", () => {

  let expDateValue = exp_date_2.value;

  let expDateValueNumber = expDateValue.replace(/[^0-9]/g,'');
  exp_date_2.value = expDateValueNumber;
  spanDateYY.innerHTML = expDateValueNumber;

  if(expDateValueNumber.length === 0){
    notBlankExpDate.classList.remove('hide');
    exp_date_2.classList.add('focusInputNumber');
    spanDateYY.innerHTML = "00";

  } else {
    notBlankExpDate.classList.add('hide');
    exp_date_2.classList.remove('focusInputNumber');

  }
});

cvc.addEventListener("keyup", () => {

  let cvcValue = cvc.value;

  let cvcValueNumber = cvcValue.replace(/[^0-9]/g,'');
  cvc.value = cvcValueNumber;
  cvcDetails.innerHTML = cvcValueNumber;

  if(cvcValueNumber.length === 0){
    notBlankCVC.classList.remove('hide');
    cvcDetails.innerHTML = "000";
    cvcColorError.classList.add('focusInputNumber');
  } else {
    notBlankCVC.classList.add('hide');
    cvcColorError.classList.remove('focusInputNumber');
  }
});