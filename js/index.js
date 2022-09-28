import { fetchFriends } from "./fetchFriends.js";
import {
  sortByName,
  sortByGender,
  sortNameByAlphabet,
  sortByAge,
} from "./filters.js";
import { renderFriends } from "./renders.js";
import {
  boxForm,
  searchForm,
  filterNameAgeForm,
  filterNameInputs,
  filterGenderForm,
  inputNames,
  inputAge,
} from "./refs.js";

const listFriend = await fetchFriends();
let sortedFriends = [];

renderFriends(listFriend);

const onFilter = (friends) => {
  console.log("🚀 ~ file: index.js ~ line 25 ~ onFilter ~ friends", friends);
  const valueNameInput = searchForm.nameInput.value;
  const valueGenderInput = filterGenderForm.genderInput.value;
  const valueSortNameInput = filterNameAgeForm.nameSortInput.value;
  const valueAgeInput = filterNameAgeForm.ageInput.value;

  const sortedByName = sortByName(friends, valueNameInput);
  sortedFriends = sortedByName;

  const sortedByGender = sortByGender(sortedFriends, valueGenderInput);
  sortedFriends = sortedByGender;

  const sortedNameByAlphabet = sortNameByAlphabet(
    sortedFriends,
    valueSortNameInput
  );
  sortedFriends = sortedNameByAlphabet;

  const sortedByAge = sortByAge(sortedFriends, valueAgeInput);
  sortedFriends = sortedByAge;

  renderFriends(sortedFriends);
};

// const inputs = document.querySelectorAll(".filter-name-input");

const onClick = ({ target }) => {
  inputNames.forEach((input) => {
    input.value === target.value
      ? (input.checked = true)
      : (input.checked = false);
  });

  inputAge.forEach((input) => {
    input.value === target.value
      ? (input.checked = true)
      : (input.checked = false);
  });

  filterNameInputs.forEach((input) => {
    input.checked
      ? input.labels[0].classList.add("active")
      : input.labels[0].classList.remove("active");
  });
};

boxForm.addEventListener("input", () => onFilter(listFriend));
filterNameAgeForm.addEventListener("click", (e) => onClick(e));
