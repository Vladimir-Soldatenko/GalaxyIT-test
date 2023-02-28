const formInputs = document.querySelectorAll(".modal__form__login__input");
const form = document.querySelector(".login__form");

form.addEventListener("submit", submitForm);

const data = {
  email: "",
  password: "",
};

function setData(data, inputs) {
  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      data[e.target.name] = e.target.value.trim();
    });
  });
}

function validate(data) {
  const errors = {};
  if (!data.email) errors.email = "*некорректно введенные данные";
  if (!data.password) errors.password = "*некорректно введенные данные";

  return errors;
}

function submitForm(e) {
  e.preventDefault();
  setData(data, formInputs);
  let errors = validate(data);

  if (Object.keys(errors).length === 0) {
    console.log(data);
    form.reset();
    errors = {};
    return;
  }
  addError(formInputs, errors);
}

function addError(inputs, errors) {
  inputs.forEach((i) => {
    if (errors[i.name]) {
      i.classList.add("error__input");
      i.nextElementSibling.classList.add("error");
      i.nextElementSibling.textContent = errors[i.name];
      i.onfocus = () => {
        i.classList.remove("error__input");
        i.nextElementSibling.classList.remove("error");
        i.nextElementSibling.innerHTML = "";
      };
      return;
    }
    i.classList.remove("error__input");
    i.nextElementSibling.classList.remove("error");
    i.nextElementSibling.innerHTML = "";
  });
}
