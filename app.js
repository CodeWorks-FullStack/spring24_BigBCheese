console.log("Ready to Party 🐀");


let items =
  [
    {
      name: "Big Pepperoni Pizza",
      price: 10.99,
      quantity: 0
    },
    {
      name: 'Signature Big Cheezy Pizza',
      price: 11.99,
      quantity: 0
    },
    {
      name: '100 Game Tokens',
      price: 15.98,
      quantity: 0
    },
    {
      name: 'Benedict',
      price: 25.97,
      quantity: 0
    }
  ]

// function buyPepperoniPizza() {
//   items[0].quantity += 1
//   console.log('bought pizza', items[0]);
// }

function buyPepperoniPizza() {
  // NOTE this is an alias, used to "short-cut" out code and make it more verbose. readable code is maintainable code!
  // this alias does work, cause it used a REFERENCE value, so when a property on it changed, the original changed too
  let pepperoniPizza = items[0]

  // this alias didn't work, because it used a PRIMITIVE value, so when the primitive was changed, the original was not updated
  // let pepperoniPizzaQuantity = items[0].quantity

  // debugger debugger can pause your code, so you can watch it evaluate line by line
  pepperoniPizza.quantity += 1
  // pepperoniPizzaQuantity += 1
  console.log('🛒🍕', pepperoniPizza);
  drawCart()
}

function buyItem(itemName) {
  // Identify, which button was pressed
  console.log('item purchased', itemName);

  let purchasedItem = findItem(itemName)
  //NOTE moved to findItem to clean up our code
  // for (let i = 0; i < items.length; i++) {
  //   let item = items[i]
  //   console.log(item, itemName)
  //   if (item.name == itemName) {
  //     console.log('Item Found!', item);
  //     purchasedItem = item
  //   }
  // }

  purchasedItem.quantity += 1
  console.log('item bought', purchasedItem);
  drawCart()
}


function findItem(itemName) {
  // let foundItem
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    // console.log(item, itemName)
    if (item.name == itemName) {
      // console.log('Item Found!', item);
      // foundItem = item
      // break // stops the loop (once our item is found, there is no point in continuing to loop)
      return item // return won't just stop the loop, it will stop the whole function
    }
  }
  // return foundItem
}

function removeItem(itemName) {
  // TODO write me later
  console.log("deleting an item", itemName);
  let deletedItem = findItem(itemName)
  console.log('🚮', deletedItem);
  deletedItem.quantity -= 1
  drawCart()
}

function drawCart() {
  // Starting, empty values or placeholders
  let cartContent = ''
  let cartTotal = 0


  // generating, adding numbers up, or adding in string content
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    if (item.quantity > 0) {
      // debugger
      cartContent += `<p>
      ${item.quantity}x ${item.name} <i class="mdi mdi-currency-usd"></i>${(item.price * item.quantity).toFixed(2)}
      <button class="btn btn-outline-danger" onclick="removeItem('${item.name}')"><i class="mdi mdi-delete-empty"></i></button>
      </p>`
      cartTotal += item.quantity * item.price
    }
  }

  // drawing, using those variables from before the loop, to draw into the page
  let cartItemsElm = document.getElementById('cart-items')
  cartItemsElm.innerHTML = cartContent // this will parse any HTML present in the string, as HTML

  let totalElm = document.getElementById('total')
  totalElm.innerHTML = `<i class="mdi mdi-currency-usd"></i>${cartTotal.toFixed(2)}`
}

function checkout() {

  // items.forEach(exampleCallback)
  items.forEach((item) => {
    // console.log('🤙', item);
    item.quantity = 0
    // return Return and break do not work in forEach
  })

  drawCart()
}

function exampleCallback(example) {
  // NOTE the callback takes in the item, our foreach is iterating on, so we can manipulate it.
  console.log('📲', example);
  // example.quantity = 0
}