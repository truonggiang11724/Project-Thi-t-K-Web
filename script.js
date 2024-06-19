document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const snapContainer = document.querySelector('.snap-container');

    const scrollAmount = 500; // Độ dài cuộn khi nhấn nút

    prevButton.addEventListener('click', () => {
        snapContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        snapContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
/*
document.addEventListener('DOMContentLoaded', function () {
    const prevButton1 = document.getElementById('prev-button1');
    const nextButton1 = document.getElementById('next-button1');
    const snapContainer1 = document.querySelector('.snap-container1');

    const scrollAmount = 300; // Độ dài cuộn khi nhấn nút

    prevButton1.addEventListener('click', () => {
        snapContainer1.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton1.addEventListener('click', () => {
        snapContainer1.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
*/
function toggleNavbar() {
    var navbarLinks_L = document.getElementById("navbarLinks");
    navbarLinks_L.classList.toggle("show");
}

// Code input Địa điểm
const suggestions = ["Pháp", "Tokyo - Nhật Bản", "Newyork - Mỹ", "biển Sầm Sơn - Thanh Hóa", "Fansipan - Sapa", "Biển Vũng Tàu", "Phố cổ Hội An"];

function autocomplete(input, arr) {
  let currentFocus;

  input.addEventListener("input", function() {
    let val = this.value;
    closeAllLists();
    if (!val) return false;
    currentFocus = -1;

    let a = document.createElement("DIV");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
        let b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function() {
          input.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  input.addEventListener("keydown", function(e) {
    let x = document.getElementsByClassName("autocomplete-items")[0];
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode === 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode === 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    let x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
      if (elmnt !== x[i] && elmnt !== input) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
  
}

autocomplete(document.getElementById("myInput"), suggestions);

// Nút địa điểm nổi tiếng
function onpopular() {
  window.scrollTo({
    top: 1200,
    behavior: 'smooth'
  });
}
// Nút khuyến mãi
function onsale() {
    window.scrollTo({
      top: 1800,
      behavior: 'smooth'
    });
  }
  function onabout() {
    window.scrollTo({
      top: 2800,
      behavior: 'smooth'
    });
  }
  function onforeign() {
    window.scrollTo({
      top: 50
      
      
      +
    ua0t00,
      behavior: 'smooth'
    });
  }
    // nút tìm kiếm địa điểm
    const timkiem = document.getElementById("resultsearch");
    function ontimkiem(){
      timkiem.style.display= "block";
      window.scrollTo({
        top: 500,
        behavior: 'smooth'
      });  
      
    } 
  // Bút bấm trở về đầu trang
const mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


    