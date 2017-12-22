var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*99);
 cart.push(new Object({[item]:price}));
 console.log(`${item} has been added to your cart`);
 return cart;
}

function viewCart() {
  // write your code here
if(cart.length === 0){
  console.log(`Your shopping cart is empty.`)
}
else{
      var myString = "In your cart, you have "

        for(var i = 0, l = cart.length; i < l; i++){
            for(var list in cart[i]){
            myString+=`${list} at $${cart[i][list]}`
                if(i!==cart.length-1){
                  myString+=", "
                }
                else{
                  myString+="."
                }
              }

            }

      console.log(myString)
  }

}

function total() {
  // write your code here




}

function removeFromCart(item) {
  // write your code here
  for (var i = 0, l = item.length; i < l; i++) {

  for (var list in cart[i]) {
    if(item === list) {
    cart.splice(i,1)
    return cart
  }
}
}
console.log("That item is not in your cart.")
return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
