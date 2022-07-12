const storeData = (mainArr) => {
  localStorage.setItem('todotasks', JSON.stringify(mainArr));
};

export default storeData;