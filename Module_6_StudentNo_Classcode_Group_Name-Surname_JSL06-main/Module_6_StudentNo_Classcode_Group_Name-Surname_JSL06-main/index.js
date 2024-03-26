const menu = { Starters: ['Garlic Bread', 'Bruschetta'], MainCourses: ['Margherita Pizza', 'Spaghetti Carbonara'], Desserts: ['Tiramisu', 'Cheesecake'] }; 
function displayMenuItems(menu) { const menuContainer = document.getElementById('menu'); 
for (const category in menu) { const categoryElement = document.createElement('div'); categoryElement.innerHTML = `<h3>${category}</h3>`;
 const listElement = document.createElement('ul'); menu[category].forEach(item => { const listItem = document.createElement('li');
  listItem.textContent = item; listItem.addEventListener('click', () => addToOrder(item)); listElement.appendChild(listItem); }); 
  categoryElement.appendChild(listElement); 
  menuContainer.appendChild(categoryElement); } 
  } /* Add the following initializeMenuSystem function and update the initMenuSystem(menu); call below */ 
  function initializeMenuSystem() { const menuContainer = document.getElementById('menu'); 
  // Clear the existing content of '#menu'
 menuContainer.innerHTML = ''; 
 for (const category in menu) { const categoryElement = document.createElement('div'); categoryElement.innerHTML = `<h3>${category}</h3>`; 
 const listElement = document.createElement('ul'); menu[category].forEach(item => { const listItem = document.createElement('li'); listItem.textContent = item; listItem.addEventListener('click', () => addToOrder(item)); listElement.appendChild(listItem); }); categoryElement.appendChild(listElement); menuContainer.appendChild(categoryElement); } } initializeMenuSystem(); 
 // Existing code
  function addToOrder(itemName) { const orderItemsList = document.getElementById('order-items'); const orderTotal = document.getElementById('order-total'); 
  const orderItem = document.createElement('li'); orderItem.textContent = itemName; 
  const orderTotalAmount = 5; 
  const total = parseFloat(orderTotal.textContent) + orderTotalAmount; orderItem.addEventListener('click', () => removeFromOrder(orderItem)); orderItemsList.appendChild(orderItem); orderTotal.textContent = total.toFixed(2); } 
  function removeFromOrder(item) { const total = document.getElementById('order-total');
  const totalValue = parseFloat(total.textContent); total.textContent = (totalValue - 5).toFixed(2); item.remove(); }
  function initMenuSystem(menu) { displayMenuItems(menu); }

initMenuSystem(menu);