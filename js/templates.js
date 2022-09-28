const getTemplateFriend = (user) => {
  return `<li class="main-box-list-item">
            <img class="friend-img" src="${user.picture.large}" alt="">
            <p class="">${user.name.first} ${user.name.last}</p>
            <p class="">${user.gender}, ${user.dob.age} years old</p>
            <p class="">${user.cell}</p>
            <p class="">${user.location.country}, ${user.location.city} </p>
          </li>`;
};

export { getTemplateFriend };
