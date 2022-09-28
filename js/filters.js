const sortByName = (users, name) => {
  return users.filter((user) => {
    const firsName = user.name.first.toLowerCase();
    const lassName = user.name.last.toLowerCase();

    if (firsName.includes(name) || lassName.includes(name)) {
      return user;
    }
  });
};

const sortByGender = (users, gender) => {
  if (gender === "all") {
    return users;
  }

  return users.filter((user) => user.gender === gender);
};

const sortNameByAlphabet = (users, sorting) => {
  console.log(users);
  console.log(sorting);

  return users.sort((a, b) => {
    if (sorting === "first name A-Z") {
      return a.name.first > b.name.first ? 1 : -1;
    }

    if (sorting === "first name Z-A") {
      return a.name.first < b.name.first ? 1 : -1;
    }

    if (sorting === "last name A-Z") {
      return a.name.last > b.name.last ? 1 : -1;
    }

    if (sorting === "last name Z-A") {
      return a.name.last < b.name.last ? 1 : -1;
    }
  });
};

const sortByAge = (users, sorting) => {
  return users.sort((a, b) => {
    if (sorting === "age-ascending") {
      return a.dob.age - b.dob.age;
    }

    if (sorting === "age-descending") {
      return b.dob.age - a.dob.age;
    }
  });
};

export { sortByName, sortByGender, sortNameByAlphabet, sortByAge };
