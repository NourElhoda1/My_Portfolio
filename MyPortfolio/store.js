ready()
//FUNCTION TO USE 
//document.getElementsByClassName()
// element.addEventListener('event',function)
// element.hasChildNodes();
//element.removeChild()
//element.firstChild
//event.target
//element.parentElement
//document.creatElement('div')
//element.append(otherElement)
//element.classList.add()
//string.replace('char1','char2')
// cart row code
{/* <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div> */}

function ready() {
 let buttons =document.getElementsByClassName("shop-item-button");
  for(let i=0; i<buttons.length;i++){
    buttons[i].addEventListener('click',addToCartClicked);
  }
    
}

function removeCartItem(event) {
    var btn= event.target;
    var cartRow = btn.parentElement.parentElement;
    cartRow.remove();
    updateCartTotal();

   
}

function purchase(){
    var cartItems= document.getElementsByClassName("cart-items")[0];
    var total= document.getElementsByClassName("cart-total-price")[0].innerText;
    while(cartItems.hasChildNodes()){
        var firstElement= cartItems.firstChild
         firstElement.remove();
    }
    updateCartTotal()
    alert("Thanks you the total is"+total)

}
function quantityChanged(event) {
   
    console.log("changed");
    updateCartTotal()
    
}

function addToCartClicked(event) {
   var btn= event.target;
    var item = btn.parentElement.parentElement;
    var title= item.getElementsByClassName("shop-item-title")[0].innerText;
    var price= item.getElementsByClassName("shop-item-price")[0].innerText;
    var imageSrc = item.getElementsByClassName("shop-item-image")[0].src;
    addItemToCart(title,price,imageSrc)
    
}

function addItemToCart(title, price, imageSrc) {
    var cartRow=document.createElement('div');
    cartRow.classList.add("cart-row");   
    cartRow.innerHTML = `<div class="cart-item cart-column">
    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1" onchange="quantityChanged()" min="1">
    <button class="btn btn-danger" type="button" onclick="removeCartItem(event)">REMOVE</button>
</div>`;
var cartItems= document.getElementsByClassName("cart-items")[0];
var  titles= cartItems.getElementsByClassName("cart-item-title");
var n=0;
let i;
for(i=0;i<titles.length ;i++){
    if(title==titles[i].innerText){
        
        break;
    }    
    
}
if(i==titles.length){
    cartItems.append(cartRow);
    updateCartTotal();
}else{
    alert("Already exist")
}
      
}

function updateCartTotal() {
  var cartItems= document.getElementsByClassName("cart-items")[0];
  var prices= cartItems.getElementsByClassName("cart-price");
  var quantities= cartItems.getElementsByClassName("cart-quantity-input");
  let price=0
  for(let i=0;i<prices.length;i++){
    price+=Number(prices[i].innerText.replace("$",""))*quantities[i].value;
  }
    console.log(price);
    document.getElementsByClassName("cart-total-price")[0].innerText="$"+price;
}
