const element = document.querySelector(".subscribe__phone__input__tel");
const maskOptions = {
  mask: "+{38} (___) ___-__-__",
};
const mask = IMask(element, maskOptions);
