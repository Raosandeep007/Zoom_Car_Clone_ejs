let productData = [];
function allcars(items) {
  productData.push(JSON.parse(items));
  displayCars(productData);
}

let car_div = document.getElementById("carsdiv");
let car_name = document.getElementById("carname_div");
let payamt = document.getElementById("pricepay");
let rating_div = document.getElementById("ratingdivappend");
const displayCars = (data) => {
  car_div.innerHTML = null;
  data.forEach((car) => {
    //card
    let card = document.createElement("div");
    card.id = "card";
    //location
    let loc = document.createElement("p");
    loc.id = "loc";
    loc.innerText = car.car_data.location.text;
    //car name
    let carname = document.createElement("h4");
    carname.id = "carname";
    carname.innerText = `${car.car_data.brand} ${car.car_data.name}`;
    car_name.innerText = `${car.car_data.brand} ${car.car_data.name}`;
    //accessories
    let accessories = document.createElement("p");
    accessories.id = "accessories";
    accessories.innerText = `${car.car_data.accessories[0]} .${car.car_data.accessories[1]} .${car.car_data.accessories[2]}`;
    //rating
    let rimg = document.createElement("img");
    rimg.id = "rimg";
    rimg.src = car.car_data.messages[0].icon_url;
    let rating = document.createElement("p");
    rating.innerText = car.car_data.messages[0].text;
    rating_div.append(rimg, rating);
    //price
    let price = document.createElement("h4");
    price.id = "price";
    price.innerText = car.car_data.pricing.payable_amount;
    payamt.innerText = car.car_data.pricing.payable_amount;
    //carimg
    let cimg = document.createElement("img");
    cimg.id = "cimg";
    cimg.src = car.car_data.url;

    let name_img_acc_div = document.createElement("div");
    name_img_acc_div.id = "name_img_acc_div";
    let name_acc_div = document.createElement("div");
    name_acc_div.id = "name_acc_div";
    name_acc_div.append(carname, accessories);
    name_img_acc_div.append(name_acc_div, cimg);
    car_div.append(name_img_acc_div);
  });
};

//change nav bgc
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".black").css("background", "black");
      $(".black").css("color", "white");
      $(".vis").css("display", "grid");
    } else {
      $(".black").css("background", "rgb(213, 213, 213)");
      $(".black").css("color", "black");
      $(".vis").css("display", "none");
    }
  });
});

//footer
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("footer").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

const hasScrolled = () => {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    $("footer").removeClass("nav-down").addClass("nav-up");
  }

  lastScrollTop = st;
};

const addons = (el) => {
  let addon_div_append = document.getElementById("addonappen");
  addon_div_append.innerHTML = null;
  if (el.checked == true) {
    let addon_div = document.createElement("div");
    addon_div.id = "addon_div";

    let p = document.createElement("p");
    p.innerText = "Membership of 12-months for ₹999 added";
    p.id = "msadd";

    let a = document.createElement("a");
    a.href = `/cars/${productData[0]._id}/plan`;
    a.innerText = "Change Plan";
    a.id = "planon";
    addon_div.append(p, a);
    addon_div_append.append(addon_div);
  }
};

let btnn = document.getElementById("checkbox");
btnn.disabled = true;

let checkboxapply = document.getElementById("checkboxapply");
let checkoutbtn = document.getElementById("checkoutbtn");

function activebtn(chkbtn) {
  if (chkbtn.checked == true) {
    console.log("checked");
    checkoutbtn.style.backgroundColor = "green";
    checkoutbtn.style.cursor = "pointer";
    checkoutbtn.disabled = false;
  } else if (chkbtn.checked == false) {
    console.log("notchecked");
    checkoutbtn.style.backgroundColor = "gray";
    checkoutbtn.style.cursor = "no-drop";
    checkoutbtn.disabled = true;
  }
}
const fare_summary = () => {
  window.location.href = `/cars/${productData[0]._id}/faresummary`;
};
const couponapply = () => {
  window.location.href = `/cars/${productData[0]._id}/coupon`;
};

var date = new Date();
var startappen = date.toString().slice(0, 21);
let timestart = document.getElementById("timestart");
timestart.innerText = `START: ${startappen}`;

var someDate = new Date();
var numberOfDaysToAdd = 1;
var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
var enddate = new Date(result);
var endappend = enddate.toString().slice(0, 21);


let timeend = document.getElementById("timeend");
timeend.innerText = `END: ${endappend}`;

let sta = document.getElementById("sta");
sta.innerText = startappen;
let end = document.getElementById("end");
end.innerText = endappend;
