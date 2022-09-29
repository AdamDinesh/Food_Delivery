// import { foodItem } from "./fooditem.js";

let url = "http://localhost:8080/Food-Delivery/cart/list";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    displayItems(data.foodItem);
  });

function displayItems(foodItem) {
  foodItem.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var itemTop = document.createElement("div");
    itemTop.setAttribute("id", "item-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    // var heart = document.createElement("img");
    // heart.setAttribute("class", "demo-icon");
    // heart.setAttribute("id", item.id);
    // heart.src = "images/icons8-close-24.png";
    // heart.setAttribute("onclick", "addToCart()");

    var heart = document.createElement("i");
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
    heart.setAttribute("id", item.id);
    heart.setAttribute("alt", "heart");
    heart.setAttribute("onclick", `addToCart(${item.id})`);

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
    let category = item.category.split(" ").join("-");
    document.getElementById(`${category}`).appendChild(itemCard);
  });
  categoryData(foodItem);
}
function categoryData(foodItem) {
  const categoryListData = [
    ...new Map(foodItem.map((item) => [item["category"], item])).values(),
  ];
  categoryLists(categoryListData);
}

function categoryLists(categoryListData) {
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
    listName.setAttribute("href", "#" + item.category.split(" ").join("-"));

    listCard.appendChild(listImg);
    listCard.appendChild(listName);

    var cloneListCard = listCard.cloneNode(true);
    categoryList.appendChild(listCard);
  });
}

// categoryLists();

// document.querySelectorAll(".demo-cart").forEach((item) => {
//   item.addEventListener("click", addToCart);
//   console.log(item);
// });

// let cartBtn = document.querySelectorAll(".add-to-cart");

// let democart = document.getElementsByClassName("add-to-cart");
// console.log(democart);
// console.log(cartBtn);
// democart.forEach((item) => {
//   item.addEventListener("click", addToCart);
//   console.log(item);
// });

var cartData = [];

function addToCart(id) {
  let condition = cartData.filter((data) => data.id === id);
  if (isLoggedUser) {
    console.log(true);

    if (condition.length == 0) {
      let cartId = document.getElementById(`${id}`);
      var itemCategory = cartId.parentNode.parentNode.parentNode.id
        .split("-")
        .join(" ");
      var itemImageLink = cartId.parentNode.nextSibling.src;
      var itemImage = itemImageLink.slice(itemImageLink.indexOf("images"));
      var itemName = cartId.parentNode.nextSibling.nextSibling.innerText;
      var itemRating = cartId.previousElementSibling.innerText;
      var itemPrice =
        cartId.parentNode.nextSibling.nextSibling.nextSibling.innerText
          .split("$")[1]
          .trim();
      let itemObj = {
        id: id,
        name: itemName,
        category: itemCategory,
        rating: Number(itemRating),
        quantity: 1,
        price: Number(itemPrice),
        image: itemImage,
      };
      // var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
      // var itemObj = foodItem.find((element) => element.name == itemToAdd);
      // console.log(itemObj);

      // if (condition) {
      //   alert("Added to Cart");
      // }
      document.getElementById(itemObj.id).classList.add("toggle-heart");
      // cartData = [...cartData, itemObj];
      cartData.push(itemObj);

      console.log(cartData);

      document.getElementById("cart-plus").innerText =
        " " + cartData.length + " Items";
      totalAmount();
      cartItems();
    } else {
      alert("Added to Cart");
    }
  } else {
    showForm();
  }

  // var index = cartData.indexOf(itemObj);
  // if (index === -1) {
  //   document.getElementById(itemObj.id).classList.add("toggle-heart");
  //   cartData = [...cartData, itemObj];
  //   console.log(cartData);
  // } else if (index > -1) {
  //   alert("Added to Cart");
  // }
  // document.getElementById("cart-plus").innerText =
  //   " " + cartData.length + " Items";
  // totalAmount();
  // cartItems();
}

function cartItems() {
  var tableBody = document.getElementById("table-body");
  tableBody.innerHTML = " ";
  cartData.map((item) => {
    var tableRow = document.createElement("tr");
    tableRow.setAttribute("id", item.id);

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

    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);

    tableBody.appendChild(tableRow);

    document.querySelectorAll(".decrease-item").forEach((item) => {
      item.addEventListener("click", decreamentItem);
    });
    document.querySelectorAll(".increase-item").forEach((item) => {
      item.addEventListener("click", increamentItem);
    });
  });
}
var currPrice = 0;
function increamentItem(foodItem) {
  // var itemToInc = this.parentNode.previousSibling.innerText;
  // var incObj = foodItem.find((element) => element.name == itemToInc);
  var itemToIncId = Number(this.parentNode.parentNode.id);
  var incObj = cartData.find((data) => data.id === itemToIncId);

  incObj.quantity += 1;

  currPrice =
    (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) /
    (incObj.quantity - 1);
  incObj.price = currPrice * incObj.quantity;

  totalAmount();
  cartItems();
}

var flag = false;

function decreamentItem(foodItem) {
  // var itemToDec = this.parentNode.previousSibling.innerText;
  // var decObj = foodItem.find((element) => element.name == itemToDec);
  var itemToDecId = Number(this.parentNode.parentNode.id);
  var decObj = cartData.find((data) => data.id === itemToDecId);

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
      document.getElementById("food-items").classList.remove("hidden");
      document.getElementById("category-list").classList.remove("hidden");
      // document.getElementById("m-cart-plus").classList.toggle("m-cart-toggle");
      document.getElementById("cart-page").classList.add("hidden");
      // document
      //   .getElementById("category-name")
      //   .classList.toggle("category-toggle");
      document.getElementById("check-out").classList.add("hidden");
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
    // document.getElementById("food-items").classList.toggle("food-items");
    // document.getElementById("category-list").classList.toggle("food-items");
    // // document.getElementById("m-cart-plus").classList.toggle("m-cart-toggle");
    // document.getElementById("cart-page").classList.toggle("cart-toggle");

    // document.getElementById("check-out").classList.toggle("cart-toggle");
    flag = true;

    document.getElementById("orders-list").classList.add("hidden");
    document.getElementById("food-items").classList.add("hidden");
    document.getElementById("category-list").classList.add("hidden");
    document.getElementById("cart-page").classList.remove("hidden");
    document.getElementById("check-out").classList.remove("hidden");
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
// var userLogin = false;
let account = document.getElementById("currentUser");

account.addEventListener("click", () => {
  if (!document.cookie) {
    showForm();
  } else if (confirm("Do you want to logout ?")) {
    doLogout();
  }
});

///////////////////////////////////////////////////
// GET COOKIES (ACCESS TOKEN,CURRENT USER DETAILS...)

function getCookies() {
  if (document.cookie) {
    var allcookies = document.cookie;
    cookiearray = allcookies.split(";");
    let obj = {};
    for (var i = 0; i < cookiearray.length; i++) {
      key = cookiearray[i].split("=")[0].trim();
      value = cookiearray[i].split("=")[1];
      obj[key] = value;
    }
    return obj;
  }
}

///cart

// document.querySelector("#checkout-btn").addEventListener("click", addToOrders);

function addToOrders() {
  if (confirm("Confirmation Your Order ?")) {
    let data = getCookies();
    let accessToken = data.access_token;

    let url = `http://localhost:8080/Food-Delivery/cart/add`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        cartData: cartData,
      }),
      headers: {
        Authorization: accessToken,

        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status == "success") {
          alert("Your Order Confirmed Successfully");
          cartData.forEach((item) => {
            document
              .getElementById(item["id"])
              .classList.remove("toggle-heart");
          });
          cartData = [];
          document.getElementById("cart-plus").innerText =
            " " + cartData.length + " Items";
          getOrdersList();
        }
      });
  }
}

/////////////////
let allcookies = document.cookie;
var isLoggedUser = false;
if (allcookies) {
  let cookiearray = allcookies.split(";");
  if (cookiearray.length == 1 && cookiearray[0].includes("access_token")) {
    getCurrentUser();
  }
}

////////////////////////////////////////////

function getCurrentUser() {
  let cookie = document.cookie;
  let accessToken = cookie.split("=")[1];

  let url = `http://localhost:8080/Food-Delivery/cart/user`;

  fetch(url, {
    headers: {
      Authorization: accessToken,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status == "success" && data.code == 200) {
        let userdata = data.userdata;
        var now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 1000);
        document.cookie = `user_name=${
          userdata.name
        };expires=${now.toUTCString()};`;
        document.cookie = `user_email=${
          userdata.email
        };expires=${now.toUTCString()};`;
        document.cookie = `user_id=${
          userdata.id
        };expires=${now.toUTCString()};`;

        document.querySelector("#currentUser").innerText = " " + userdata.name;
        checkUserActive();
      }
    });
}

function checkUserActive() {
  let data = getCookies();
  if (data) {
    if (data.access_token && data.user_name) {
      isLoggedUser = true;
      document
        .querySelector("#yourOrders")
        .addEventListener("click", getOrdersList);
      document
        .querySelector("#checkout-btn")
        .addEventListener("click", addToOrders);
      document.querySelector("#currentUser").innerText = " " + data.user_name;
    }
  } else {
    document.querySelector("#currentUser").innerText = " Account";
    document
      .querySelector("#yourOrders")
      .removeEventListener("click", getOrdersList);
    document
      .querySelector("#checkout-btn")
      .removeEventListener("click", addToOrders);
  }
}
checkUserActive();
function getOrdersList() {
  // alert("order");
  let data = getCookies();
  let accessToken = data.access_token;
  let customer = data.user_name;
  let orderCards = document.querySelector(".order-cart-items");
  orderCards.innerHTML = " ";

  let url = `http://localhost:8080/Food-Delivery/cart/myCart`;

  fetch(url, {
    headers: {
      Authorization: accessToken,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.OrderData.length >= 1) {
        document.getElementById("orders-list").classList.remove("hidden");
        document.getElementById("food-items").classList.add("hidden");
        document.getElementById("category-list").classList.add("hidden");
        document.getElementById("cart-page").classList.add("hidden");
        document.getElementById("check-out").classList.add("hidden");

        // let orderIdList = [
        //   ...new Set([data.OrderData.map((item) => item["order_id"])]),
        // ];
        let orderIdList = [
          ...new Map(
            data.OrderData.map((item) => [item["order_id"], item])
          ).keys(),
        ];
        // console.log(data.OrderData);

        let total = [];

        let i, j;
        for (i = 0; i < orderIdList.length; i++) {
          let sum = 0;
          let item = 0;
          for (j = 0; j < data.OrderData.length; j++) {
            if (orderIdList[i] == data.OrderData[j]["order_id"]) {
              sum += data.OrderData[j]["price"];
              item++;
            }
          }
          total[i] = sum;
          orderCards.innerHTML += `<td id="orderId">${orderIdList[i]}</td>
            <td id="customer">${customer}</td>
            <td id="products">${item}</td>
            <td id="status">Pending</td>
            <td id="total">$ ${sum}</td>`;
        }

        //console.log(total);
      } else {
        alert("Your is Order Empty, Order Now.........");
      }
      // console.log(data);
    });
}
function showForm() {
  document.querySelector(".login-section").classList.remove("hidden");
}
function formClose() {
  document.querySelector(".login-section").classList.add("hidden");
  clearInputValues();
}
document.getElementById("homepage").addEventListener("click", showHomePage);
document.querySelector(".fa-home").addEventListener("click", showHomePage);
function showHomePage() {
  document.getElementById("orders-list").classList.add("hidden");
  document.getElementById("cart-page").classList.add("hidden");
  document.getElementById("check-out").classList.add("hidden");
  document.getElementById("food-items").classList.remove("hidden");
  document.getElementById("category-list").classList.remove("hidden");
}
/////////////////////////////////////////////
// LOGOUT => DELETE ALL COOKIES AND ACCESS TOKEN IN TABLE (DATABASE)

function doLogout() {
  let data = getCookies();
  let accessToken = data.access_token;

  let url = `http://localhost:8080/Food-Delivery/cart/logout`;

  fetch(url, {
    headers: {
      Authorization: accessToken,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status == "success" && data.code == 200) {
        deleteAllCookies();
        // checkUserActive();
        // showHomePage();
        // isLoggedUser=false;
        location.href = "http://localhost:8080/Food-Delivery/index.html";
      }
    });
}
///////////////////////////////////////////////
// DELETE ALL COOKIES

function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    key = cookies[i].split("=")[0];
    document.cookie = key + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

//////////////////////////////////////////////
// UNAUTHORIZED USER (INVALID TOKEN);

function unauthorizedUser() {
  alert("Unauthorized User,Invalid Token ");
  doLogout();
}
