const fetchFriends = async () => {
  const response = await fetch(`https://randomuser.me/api/?results=20&noinfo`);
  const dataResponse = await response.json();
  return dataResponse.results;
};

export { fetchFriends };
