let productData = [];
  function allcars(items) {
    productData.push(JSON.parse(items));
  }

  
function checkoutback() {
    window.location.href = `/cars/${productData[0]._id}/checkout`;
  };
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

