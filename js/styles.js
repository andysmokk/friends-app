const addClassActive = (inputs) => {
  inputs.forEach((input) => {
    input.checked
      ? input.labels[0].classList.add("active")
      : input.labels[0].classList.remove("active");
  });
};

export { addClassActive };
