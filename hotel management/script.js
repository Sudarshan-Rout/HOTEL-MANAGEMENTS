let order = [];
let total = 0;

function addToOrder(itemName, price) {
  order.push({ name: itemName, price: price });
  total += price;
  updateOrderList();
}

function updateOrderList() {
  const list = document.getElementById('order-list');
  list.innerHTML = '';
  order.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    list.appendChild(li);
  });
  document.getElementById('total').textContent = total;
}

function placeOrder() {
  if (order.length === 0) {
    alert('Please add items to your order!');
    return;
  }
  alert(`Order placed successfully! Total bill: ₹${total}`);
  order = [];
  total = 0;
  updateOrderList();
}
