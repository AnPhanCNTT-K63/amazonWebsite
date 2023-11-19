let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let autoInterval;

let lengthItems = items.length - 1;
let active = 0;
let isAuto = true;

next.onclick = function () {
  isAuto = false;
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};

prev.onclick = function () {
  isAuto = false;
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};

let refreshInterval = setInterval(() => {
  if (isAuto) {
    next.click();
  }
}, 3000);

function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";

  
  clearInterval(refreshInterval);

  if (!isAuto) {
    refreshInterval = setInterval(() => {
      next.click();
    }, 3000);
    isAuto = true;
  }
}

window.onresize = function (event) {
  reloadSlider();
};

function redirectToSignIn() {
  window.location.assign("sign in1.html");
}


    function changeLanguage(select) {
        if (select === "VI") {
          window.location.href = "vietnamese.html";
        } 
            
    }
