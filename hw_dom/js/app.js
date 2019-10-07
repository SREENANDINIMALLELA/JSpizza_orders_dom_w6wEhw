document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("#orders_form")
  form.addEventListener('submit',newOrderSubmit)


  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})
const newOrderSubmit= function(event){
  event.preventDefault();
  const orderListItem = createReadingListItem(event.target);
  const orderList = document.querySelector('#history');
  orderList.appendChild(orderListItem);
  event.target.reset();
}

const createReadingListItem = function (form) {
  const orderListItem = document.createElement('ul');
  orderListItem.classList.add('history');


  const name = document.createElement('h2');
  name.textContent = `${form.name.value} made an order`;
  orderListItem.appendChild(name);


  const base = document.createElement('p');
  base.textContent = `with ${form.base.value} base`;
  orderListItem.appendChild(base);

  const toppings = document.createElement('p');
  toppings.textContent = `with toppings  ${form.toppings.value}`;
  orderListItem.appendChild(toppings);

  const quantity = document.createElement('p');
  quantity.textContent = `with quantity ${form.quantity.value}`;
  orderListItem.appendChild(quantity);
  return orderListItem;


  const radio = document.createElement('p');
  radio.textContent = `${form.name.value}`;
  orderListItem.appendChild(radio);
  return orderListItem;

}
const handleDeleteAllClick = function (event) {
  const orderList = document.querySelector('#history');
  orderList.innerHTML = '';
}
