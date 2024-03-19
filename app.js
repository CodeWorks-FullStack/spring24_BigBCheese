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
}