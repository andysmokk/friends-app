import { fetchFriends } from "./fetchFriends.js";
import { sortByName, sortByGender, sortNameByAlphabet } from "./filters.js";

const listFriend = await fetchFriends();
let sortedFriends = [];

const getTemplateFriend = (user) => {
  return `<li class="main-box-list-item">
            <img class="friend-img" src="${user.picture.large}" alt="">
            <p class="">${user.name.first} ${user.name.last}</p>
            <p class="">${user.gender}, ${user.dob.age} years old</p>
            <p class="">${user.cell}</p>
            <p class="">${user.location.country}, ${user.location.city} </p>
          </li>`;
};

const boxFriends = document.querySelector(".main-box-list");

const renderFriends = (friends) => {
  boxFriends.innerHTML = friends
    .map((friend) => getTemplateFriend(friend))
    .join("");
};

renderFriends(listFriend);

const form = document.querySelector("#form");

const onFilter = (friends) => {
  const valueNameInput = form.nameInput.value;
  const valueGenderInput = form.genderInput.value;
  const valueSortNameInput = form.nameSortInput.value;

  const sortedByName = sortByName(friends, valueNameInput);
  sortedFriends = sortedByName;

  const sortedByGender = sortByGender(sortedFriends, valueGenderInput);
  sortedFriends = sortedByGender;

  const sortedNameByAlphabet = sortNameByAlphabet(
    sortedFriends,
    valueSortNameInput
  );
  sortedFriends = sortedNameByAlphabet;

  renderFriends(sortedFriends);
};

form.addEventListener("input", () => onFilter(listFriend));
