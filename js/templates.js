const getTemplateFriend = (user) => {
  return `<li class="main-box-list-item">
            <img class="friend-img" src="${user.picture.large}" alt="">
            <p class="friend-name">${user.name.first} ${user.name.last}</p>
            <p class="friend-gender">${user.gender}, ${user.dob.age} years old</p>
            <p class="friend-cell">${user.cell}</p>
            <p class="friend-location">${user.location.country}, ${user.location.city} </p>
          </li>`;
};

export { getTemplateFriend };
