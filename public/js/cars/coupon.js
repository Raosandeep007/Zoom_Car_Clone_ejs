let productData = [];
  function allcars(items) {
    productData.push(JSON.parse(items));
  }

  
function checkoutback() {
    window.location.href = `/cars/${productData[0]._id}/checkout`;
  };