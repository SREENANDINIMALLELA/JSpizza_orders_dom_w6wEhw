document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("#orders_form")
  form.addEventListener('submit',newOrderSubmit)
})
const newOrderSubmit= function(event){
  event.preventDefault();
  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#history');
  readingList.appendChild(readingListItem);
  event.target.reset();
}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('reading-list-item');
  const name = document.createElement('h2');
  name.textContent = `${form.name.value} made an order`;
  readingListItem.appendChild(name);

  const base = document.createElement('p');
  base.textContent = `with ${form.base.value} base`;
  readingListItem.appendChild(base);

  const toppings = document.createElement('p');
  toppings.textContent = `with toppings  ${form.toppings.value}`;
  readingListItem.appendChild(toppings);

  const quantity = document.createElement('p');
  quantity.textContent = `with quantity ${form.quantity.value}`;
  readingListItem.appendChild(quantity);

  return readingListItem;
}
