let productsArray = [];
var count = 1;
var numberofElements = document.getElementById("numberElements");
class Product {
  constructor(name, price, description, count) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.count = count;
  }

  static AddProduct(product) {
    numberofElements.innerHTML = productsArray.length;
    let index = productsArray.indexOf(product);
    var productList = document.getElementById("productList");
    var productCard = document.createElement("li");
    productCard.setAttribute("class", "product_card");

    var cardInner = `
                <h5>Name: ${product.name}</h5>
                <span>Price: ${product.price}</span>
                <p>Description: ${product.description}</p>
                <button id="${product.count}" onclick="Product.RemoveProduct(${product.count},${index});">Remove</button>
        `;

    productCard.innerHTML = cardInner;
    productList.appendChild(productCard);
  }
  static RemoveProduct(item, index) {
    var elemRemove = productsArray.indexOf(index);
    productsArray.splice(elemRemove, 1);
    var itemRemove = document.getElementById(item);
    itemRemove.parentElement.remove();
    numberofElements.innerHTML = productsArray.length;
  }
  static RemoveAllProduct() {
    document.getElementById("productList").innerHTML = "";
    productsArray.length = 0;
    numberofElements.innerHTML = productsArray.length;
  }
}

var buttonAdd = document.getElementById("submit_product");
var buttonClearAll = document.getElementById("clearAll");
buttonAdd.addEventListener("click", functionAdd);
buttonClearAll.addEventListener("click", functionRemoveAll);
function functionRemoveAll() {
  Product.RemoveAllProduct();
}

function functionAdd() {
  count++;
  var nameValue = document.getElementById("product_name").value;
  var priceValue = document.getElementById("product_price").value;
  var descriptionValue = document.getElementById("product_description").value;
  var product = new Product(nameValue, priceValue, descriptionValue, count);
  productsArray.push(product);
  Product.AddProduct(product);
  console.log(productsArray);
}
