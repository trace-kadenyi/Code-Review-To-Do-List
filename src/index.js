import { MyToDo, OneTaskListItem } from './modules/todoObjectClass.js';
import storeData from './modules/localstorage.js';
import './style.css';

const task = new OneTaskListItem();
const addListItem = document.querySelector('#add');
addListItem.addEventListener('change', () => {
  const AddedItem = new OneTaskListItem();
  AddedItem.addNewToDo(MyToDo.tasks, addListItem.value);
});
const clearSelectedTasks = document.querySelector('.clear');
clearSelectedTasks.addEventListener('click', () => {
  MyToDo.tasks = MyToDo.tasks.filter((task) => task.completed === false);
  storeData();
  task.displayToDoList();
});
window.onload = () => {
  task.displayToDoList();
};