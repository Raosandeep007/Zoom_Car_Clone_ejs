let productData;
function allcars(items) {
  productData = JSON.parse(items);
  displayCars(productData);
}

let car_div = document.getElementById("carsdiv");

const displayCars = (data) => {
  car_div.innerHTML = null;
  data.forEach((car) => {
    let card = document.createElement("div");
    card.id = "cardproduct";

    let loc = document.createElement("p");
    loc.id = "loc";
    loc.innerText = car.car_data.location.text;

    let carname = document.createElement("h4");
    carname.id = "carname";
    carname.id = "carname";
    carname.innerText = `${car.car_data.brand} ${car.car_data.name}`;

    let accessories = document.createElement("p");
    accessories.id = "accessories";
    accessories.innerText = `${car.car_data.accessories[0]} .${car.car_data.accessories[1]} .${car.car_data.accessories[2]}`;

    let rdiv = document.createElement("div");
    rdiv.id = "rdiv";

    let rimg = document.createElement("img");
    rimg.id = "rimg";
    rimg.src = car.car_data.messages[0].icon_url;

    let rating = document.createElement("p");
    rating.innerText = car.car_data.messages[0].text;
    rdiv.append(rimg, rating);

    let price = document.createElement("h4");
    price.id = "pricecar";
    price.innerText = car.car_data.pricing.payable_amount;

    let book = document.createElement("button");
    book.innerText = "BOOK NOW";
    book.id = "booknow";

    let pricebtndiv = document.createElement("div");
    pricebtndiv.id = "pricebtndiv";

    let tagdiv = document.createElement("div");
    tagdiv.id = "tagdiv";

    let imgdiv = document.createElement("div");
    imgdiv.id = "imgdiv";
    let cimg = document.createElement("img");
    cimg.id = "cimg";
    cimg.src = car.car_data.url;

    let oneproduct = document.createElement("a");
    oneproduct.href = `/cars/${car._id}/checkout`;
    oneproduct.id = "oneproduct";
    oneproduct.addEventListener("click", () => {
      addProduct(car);
    });
    pricebtndiv.append(price, book);
    imgdiv.append(cimg);
    tagdiv.append(loc, carname, accessories, rdiv);
    card.append(imgdiv, tagdiv, pricebtndiv);
    oneproduct.append(card);
    car_div.append(oneproduct);
  });
};

const freekms = (el, data) => {
  dataparse = JSON.parse(data);
  var sortarr = [];
  dataparse.forEach((car) => {
    if (el.value == 66 && car.car_data.accessories[1].includes("Diesel")) {
      sortarr.push(car);
    } else if (
      el.value == 132 &&
      car.car_data.accessories[1].includes("Petrol")
    ) {
      sortarr.push(car);
    } else {
      displayCars(dataparse);
    }
  });
  displayCars(sortarr);
};

const seats = (el, data) => {
  dataparse = JSON.parse(data);

  var sortarr = [];
  dataparse.forEach((car) => {
    if (el.value == 5 && car.car_data.accessories[2].includes("5 Seats")) {
      sortarr.push(car);
    } else if (
      el.value == 6 &&
      car.car_data.accessories[2].includes("6 Seats")
    ) {
      sortarr.push(car);
    } else if (
      el.value == 7 &&
      car.car_data.accessories[2].includes("7 Seats")
    ) {
      sortarr.push(car);
    } else {
      displayCars(dataparse);
    }
  });
  displayCars(sortarr);
};

const transmission = (el, data) => {
  dataparse = JSON.parse(data);

  var sortarr = [];
  dataparse.forEach((car) => {
    if (
      el.value == "Manual" &&
      car.car_data.accessories[0].includes("Manual")
    ) {
      sortarr.push(car);
    } else if (
      el.value == "Automatic" &&
      car.car_data.accessories[0].includes("Automatic")
    ) {
      sortarr.push(car);
    } else {
      displayCars(dataparse);
    }
  });
  displayCars(sortarr);
};

const cartypes = (el, data) => {
  dataparse = JSON.parse(data);

  var sortarr = [];
  dataparse.forEach((car) => {
    if (el.value == "SUV" && car.car_data.accessories[0].includes("Manual")) {
      sortarr.push(car);
    } else if (
      el.value == "hatchback" &&
      car.car_data.accessories[0].includes("Automatic")
    ) {
      sortarr.push(car);
    } else if (
      el.value == "Sedan" &&
      car.car_data.accessories[0].includes("Manual")
    ) {
      sortarr.push(car);
    } else {
      displayCars(dataparse);
    }
  });
  displayCars(sortarr);
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
