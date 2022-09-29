// import { foodItem } from "./fooditem.js";

// console.log(foodItem);

function displayItems() {
  var biryani = document.getElementById("biryani");
  var chicken = document.getElementById("chicken");
  var paneer = document.getElementById("paneer");
  var vegetable = document.getElementById("vegetable");
  var chinese = document.getElementById("chinese");
  var southIndian = document.getElementById("south-indian");
  var foodItem;
  let url = "http://localhost:8080/Food-Delivery/cart/list";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      foodItem = data.foodItem;

      const biryaniData = foodItem.filter((item) => item.category == "biryani");

      const chickenData = foodItem.filter((item) => item.category == "chicken");
      const paneerData = foodItem.filter((item) => item.category == "paneer");
      const vegetableData = foodItem.filter(
        (item) => item.category == "vegetable"
      );
      const chineseData = foodItem.filter((item) => item.category == "chinese");
      const southIndianData = foodItem.filter(
        (item) => item.category == "south indian"
      );

      biryaniData.map((item) => {
        var itemCard = document.createElement("div");
        itemCard.setAttribute("id", "item-card");

        var itemTop = document.createElement("div");
        itemTop.setAttribute("id", "item-top");

        var star = document.createElement("i");
        star.setAttribute("class", "fa fa-star");
        star.setAttribute("id", "rating");
        star.innerText = " " + item.rating;

        var heart = document.createElement("i");
        heart.setAttribute("class", "fa fa-heart-o add-to-cart");
        heart.setAttribute("id", item.id);

        var img = document.createElement("img");
        img.src = item.image;
        img.setAttribute("alt", "img");

        var itemName = document.createElement("p");
        itemName.setAttribute("id", "item-name");
        itemName.innerText = item.name;

        var itemPrice = document.createElement("p");
        itemPrice.setAttribute("id", "item-price");
        itemPrice.innerText = "Price : $ " + item.price;

        itemTop.appendChild(star);
        itemTop.appendChild(heart);
        itemCard.appendChild(itemTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);
      });

      chickenData.map((item) => {
        var itemCard = document.createElement("div");
        itemCard.setAttribute("id", "item-card");

        var itemTop = document.createElement("div");
        itemTop.setAttribute("id", "item-top");

        var star = document.createElement("i");
        star.setAttribute("class", "fa fa-star");
        star.setAttribute("id", "rating");
        star.innerText = " " + item.rating;

        var heart = document.createElement("i");
        heart.setAttribute("class", "fa fa-heart-o add-to-cart");
        heart.setAttribute("id", item.id);

        var img = document.createElement("img");
        img.src = item.image;
        img.setAttribute("alt", "img");

        var itemName = document.createElement("p");
        itemName.setAttribute("id", "item-name");
        itemName.innerText = item.name;

        var itemPrice = document.createElement("p");
        itemPrice.setAttribute("id", "item-price");
        itemPrice.innerText = "Price : $ " + item.price;

        itemTop.appendChild(star);
        itemTop.appendChild(heart);
        itemCard.appendChild(itemTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chicken.appendChild(itemCard);
      });

      paneerData.map((item) => {
        var itemCard = document.createElement("div");
        itemCard.setAttribute("id", "item-card");

        var itemTop = document.createElement("div");
        itemTop.setAttribute("id", "item-top");

        var star = document.createElement("i");
        star.setAttribute("class", "fa fa-star");
        star.setAttribute("id", "rating");
        star.innerText = " " + item.rating;

        var heart = document.createElement("i");
        heart.setAttribute("class", "fa fa-heart-o add-to-cart");
        heart.setAttribute("id", item.id);

        var img = document.createElement("img");
        img.src = item.image;
        img.setAttribute("alt", "img");

        var itemName = document.createElement("p");
        itemName.setAttribute("id", "item-name");
        itemName.innerText = item.name;

        var itemPrice = document.createElement("p");
        itemPrice.setAttribute("id", "item-price");
        itemPrice.innerText = "Price : $ " + item.price;

        itemTop.appendChild(star);
        itemTop.appendChild(heart);
        itemCard.appendChild(itemTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        paneer.appendChild(itemCard);
      });

      vegetableData.map((item) => {
        var itemCard = document.createElement("div");
        itemCard.setAttribute("id", "item-card");

        var itemTop = document.createElement("div");
        itemTop.setAttribute("id", "item-top");

        var star = document.createElement("i");
        star.setAttribute("class", "fa fa-star");
        star.setAttribute("id", "rating");
        star.innerText = " " + item.rating;

        var heart = document.createElement("i");
        heart.setAttribute("class", "fa fa-heart-o add-to-cart");
        heart.setAttribute("id", item.id);

        var img = document.createElement("img");
        img.src = item.image;
        img.setAttribute("alt", "img");

        var itemName = document.createElement("p");
        itemName.setAttribute("id", "item-name");
        itemName.innerText = item.name;

        var itemPrice = document.createElement("p");
        itemPrice.setAttribute("id", "item-price");
        itemPrice.innerText = "Price : $ " + item.price;

        itemTop.appendChild(star);
        itemTop.appendChild(heart);
        itemCard.appendChild(itemTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        vegetable.appendChild(itemCard);
      });

      chineseData.map((item) => {
        var itemCard = document.createElement("div");
        itemCard.setAttribute("id", "item-card");

        var itemTop = document.createElement("div");
        itemTop.setAttribute("id", "item-top");

        var star = document.createElement("i");
        star.setAttribute("class", "fa fa-star");
        star.setAttribute("id", "rating");
        star.innerText = " " + item.rating;

        var heart = document.createElement("i");
        heart.setAttribute("class", "fa fa-heart-o add-to-cart");
        heart.setAttribute("id", item.id);

        var img = document.createElement("img");
        img.src = item.image;
        img.setAttribute("alt", "img");

        var itemName = document.createElement("p");
        itemName.setAttribute("id", "item-name");
        itemName.innerText = item.name;

        var itemPrice = document.createElement("p");
        itemPrice.setAttribute("id", "item-price");
        itemPrice.innerText = "Price : $ " + item.price;

        itemTop.appendChild(star);
        itemTop.appendChild(heart);
        itemCard.appendChild(itemTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chinese.appendChild(itemCard);
      });

      southIndianData.map((item) => {
        var itemCard = document.createElement("div");
        itemCard.setAttribute("id", "item-card");

        var itemTop = document.createElement("div");
        itemTop.setAttribute("id", "item-top");

        var star = document.createElement("i");
        star.setAttribute("class", "fa fa-star");
        star.setAttribute("id", "rating");
        star.innerText = " " + item.rating;

        var heart = document.createElement("i");
        heart.setAttribute("class", "fa fa-heart-o add-to-cart");
        heart.setAttribute("id", item.id);

        var img = document.createElement("img");
        img.src = item.image;
        img.setAttribute("alt", "img");

        var itemName = document.createElement("p");
        itemName.setAttribute("id", "item-name");
        itemName.innerText = item.name;

        var itemPrice = document.createElement("p");
        itemPrice.setAttribute("id", "item-price");
        itemPrice.innerText = "Price : $ " + item.price;

        itemTop.appendChild(star);
        itemTop.appendChild(heart);
        itemCard.appendChild(itemTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard);
      });
      const categoryListData = [
        ...new Map(foodItem.map((item) => [item["category"], item])).values(),
      ];
      categoryLists(categoryListData);

      console.log(document.querySelectorAll(".add-to-cart"));
    });
}
displayItems();

function categoryLists(categoryListData) {
  if (categoryListData) {
    let categoryList = document.getElementById("category-list");
    categoryListData.map((item) => {
      var listCard = document.createElement("div");
      listCard.setAttribute("class", "list-card");

      var listImg = document.createElement("img");
      listImg.src = item.image;
      listImg.setAttribute("alt", "list");

      var listName = document.createElement("a");
      listName.setAttribute("class", "list-name");
      listName.innerText = item.category;
      listName.setAttribute("href", "#" + item.category);

      listCard.appendChild(listImg);
      listCard.appendChild(listName);

      var cloneListCard = listCard.cloneNode(true);
      categoryList.appendChild(listCard);
    });
  }
}

categoryLists();

console.log(document.querySelectorAll(".add-to-cart"));

document.querySelectorAll(".add-to-cart").forEach((item) => {
  item.addEventListener("click", addToCart);
});

var cartData = [];

function addToCart() {
  console.log(this.parentNode.nextSibling.nextSibling);

  var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
  var itemObj = foodItem.find((element) => element.name == itemToAdd);
  console.log(itemObj);

  var index = cartData.indexOf(itemObj);
  if (index === -1) {
    document.getElementById(itemObj.id).classList.add("toggle-heart");
    cartData = [...cartData, itemObj];
    console.log(cartData);
  } else if (index > -1) {
    alert("Added to Cart");
  }
  document.getElementById("cart-plus").innerText =
    " " + cartData.length + " Items";
  totalAmount();
  cartItems();
}

function cartItems() {
  var tableBody = document.getElementById("table-body");
  tableBody.innerHTML = " ";
  cartData.map((item) => {
    var tableRows = document.createElement("tr");

    var tableData1 = document.createElement("td");
    var img = document.createElement("img");
    img.src = item.image;
    tableData1.appendChild(img);

    var tableData2 = document.createElement("td");
    tableData2.innerText = item.name;

    var tableData3 = document.createElement("td");
    var button1 = document.createElement("button");
    button1.setAttribute("class", "decrease-item");
    button1.innerHTML = "-";

    var span = document.createElement("span");
    span.innerText = item.quantity;

    var button2 = document.createElement("button");
    button2.setAttribute("class", "increase-item");
    button2.innerHTML = "+";

    tableData3.appendChild(button1);
    tableData3.appendChild(span);
    tableData3.appendChild(button2);

    var tableData4 = document.createElement("td");
    tableData4.innerText = item.price;

    tableRows.appendChild(tableData1);
    tableRows.appendChild(tableData2);
    tableRows.appendChild(tableData3);
    tableRows.appendChild(tableData4);

    tableBody.appendChild(tableRows);

    document.querySelectorAll(".decrease-item").forEach((item) => {
      item.addEventListener("click", decreamentItem);
    });
    document.querySelectorAll(".increase-item").forEach((item) => {
      item.addEventListener("click", increamentItem);
    });
  });
}
var currPrice = 0;
function increamentItem() {
  var itemToInc = this.parentNode.previousSibling.innerText;

  var incObj = foodItem.find((element) => element.name == itemToInc);

  incObj.quantity += 1;

  currPrice =
    (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) /
    (incObj.quantity - 1);
  incObj.price = currPrice * incObj.quantity;

  totalAmount();
  cartItems();
}

var flag = false;

function decreamentItem() {
  var itemToDec = this.parentNode.previousSibling.innerText;

  var decObj = foodItem.find((element) => element.name == itemToDec);

  var ind = cartData.indexOf(decObj);
  if (decObj.quantity > 1) {
    currPrice =
      (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) /
      decObj.quantity;
    decObj.quantity -= 1;
    decObj.price = currPrice * decObj.quantity;
  } else {
    document.getElementById(decObj.id).classList.remove("toggle-heart");
    cartData.splice(ind, 1);
    document.getElementById("cart-plus").innerText =
      " " + cartData.length + " Items";
    // document.getElementById("m-cart-plus").innerText =
    //   " " + cartData.length ;
    if (cartData.length < 1 && flag) {
      document.getElementById("food-items").classList.toggle("food-items");
      document.getElementById("category-list").classList.toggle("food-items");
      // document.getElementById("m-cart-plus").classList.toggle("m-cart-toggle");
      document.getElementById("cart-page").classList.toggle("cart-toggle");
      // document
      //   .getElementById("category-name")
      //   .classList.toggle("category-toggle");
      document.getElementById("check-out").classList.toggle("cart-toggle");
      flag = false;
      alert("Currently no item in cart");
    }
  }
  totalAmount();
  cartItems();
}

function totalAmount() {
  var sum = 0;
  cartData.map((item) => {
    sum += item.price;
  });
  document.getElementById("total-item").innerText =
    "Total Item : " + cartData.length;
  document.getElementById("total-price").innerText = "Total Price : $ " + sum;
}

document.getElementById("cart-plus").addEventListener("click", cartToggle);
// document.getElementById("m-cart-plus").addEventListener("click", cartToggle);

function cartToggle() {
  if (cartData.length > 0) {
    document.getElementById("food-items").classList.toggle("food-items");
    document.getElementById("category-list").classList.toggle("food-items");
    // document.getElementById("m-cart-plus").classList.toggle("m-cart-toggle");
    document.getElementById("cart-page").classList.toggle("cart-toggle");
    // document
    //   .getElementById("category-name")
    //   .classList.toggle("category-toggle");
    document.getElementById("check-out").classList.toggle("cart-toggle");
    flag = true;
  } else {
    alert("Currently no items in cart");
  }
}

document.getElementById("add-address").addEventListener("click", addAddress);
// document.getElementById("m-add-address").addEventListener("click", addAddress);

function addAddress() {
  var address = prompt("Enter your Address");
  if (address) {
    document.getElementById("add-address").innerText = " " + address;
    // document.getElementById("m-add-address").innerText=" "+address;
  } else {
    document.getElementById("add-address").innerText = " Your Address";
    alert("Address not added");
  }
}
