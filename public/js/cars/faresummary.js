let productData = [];
function allcars(items) {
  productData.push(JSON.parse(items));
  displayCars(productData);
}

function checkoutback() {
  window.location.href = `/cars/${productData[0]._id}/checkout`;
}

let car_name = document.getElementById("carname_div");
let paybtn = document.getElementById("checkoutbtn");
let amtshow = document.getElementById("amtshow");
let totalamtshow = document.getElementById("totalamtshow");
let finalfare = document.getElementById("finalfare");
const displayCars = (data) => {
  car_name.innerHTML = null;
  amtshow.innerText = null;
  data.forEach((car) => {
    //car name
    car_name.innerText = `${car.car_data.brand} ${car.car_data.name}`;

    //   //price
    var payableamt = car.car_data.pricing.revenue + 92;
    paybtn.innerText = ` PROCEED TO PAY ₹${payableamt}  `;
    finalfare.innerText = `₹${payableamt}`;
    amtshow.innerText = car.car_data.pricing.payable_amount;
    totalamtshow.innerText = `₹${payableamt}`;
  });
};
const payment = () => {
  window.location.href = `/cars/${productData[0]._id}/payment`;
};
var date = new Date();
var startappen = date.toString().slice(0, 21);

var someDate = new Date();
var numberOfDaysToAdd = 1;
var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
var enddate = new Date(result);
var endappend = enddate.toString().slice(0, 21);


let sta = document.getElementById("sta");
sta.innerText = startappen;
let end = document.getElementById("end");
end.innerText = endappend;
