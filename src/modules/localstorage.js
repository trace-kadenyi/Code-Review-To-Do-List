const storeData = () => {
    localStorage.setItem('todotasks', JSON.stringify(MyToDo.tasks));
}

export default storeData;