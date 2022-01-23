let productData = [];
function allcars(items) {
  productData.push(JSON.parse(items));
  console.log("productData:", productData);
  displayCars(productData);
}
const container = document.getElementById("container");
const displayCars = (data) => {
  data.forEach((car) => {
    let car_img = document.createElement("img");
    car_img.id = "car_img";
    car_img.src =
      "https://images.moneycontrol.com/static-mcnews/2017/09/ZOOMCAR-770x433.jpg?impolicy=website&width=770&height=431";
    let car_name = document.createElement("h1");
    car_name.id = "car_name";
    car_name.innerText = `Thank You For Booking ${car.car_data.brand} ${car.car_data.name}`;
    container.append(car_img, car_name);
  });
};
