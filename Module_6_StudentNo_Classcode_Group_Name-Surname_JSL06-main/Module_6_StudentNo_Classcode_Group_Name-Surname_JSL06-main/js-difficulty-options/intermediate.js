const menu = { 
    Starters: ['Garlic Bread', 'Bruschetta'], 
    MainCourses: ['Margherita Pizza', 'Spaghetti Carbonara'], 
    Desserts: ['Tiramisu', 'Cheesecake'] 
  }; 
  
  function displayMenuItems(menu) { 
    const menuContainer = document.getElementById('menu'); 
    for (const [category, items] of Object.entries(menu)) { 
      const categoryElement = document.createElement('h3'); 
      categoryElement.textContent = category; 
      menuContainer.appendChild(categoryElement); 
      const listElement = document.createElement('ul'); 
      items.forEach(item => { 
        const listItem = document.createElement('li'); 
        listItem.textContent = item; 
        listItem.addEventListener('click', () => addToOrder(item)); 
        listElement.appendChild(listItem); 
      }); 
      menuContainer.appendChild(listElement); 
    } 
  } 
  
  function addToOrder(itemName) { 
    const orderItemsList = document.getElementById('order-items'); 
    const orderTotalElem = document.getElementById('order-total'); 
    const orderItem = document.createElement('li'); 
    orderItem.textContent = itemName; 
    orderItemsList.appendChild(orderItem); 
    const currentTotal = parseFloat(orderTotalElem.textContent); 
    const itemPrice = 90; // Customizing the item price (assumed R90 per item) 
    const newTotal = (currentTotal + itemPrice).toFixed(2); 
    orderTotalElem.textContent = newTotal; 
  } 
  
  function initMenuSystem() { 
    displayMenuItems(menu); 
  } 
  
  initMenuSystem();
  