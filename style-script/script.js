document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");

    const anchors = document.querySelectorAll(".side-anchor");
    const anchorsArr = Array.from(anchors);

    const faqs = document.querySelectorAll(".vprasanja-list");
    const faqsArr = Array.from(faqs);

    var kontaktDiv = document.querySelector(".contact");
    var homeNumberDiv = document.querySelector(".home-number");

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleVisibility() {
        if (window.innerWidth <= 760 && isInViewport(kontaktDiv)) {
            homeNumberDiv.style.display = "none";
            window.removeEventListener("scroll", handleVisibility);
        }
    }

    handleVisibility();

    window.addEventListener("scroll", handleVisibility);


    if (menuIcon) {
        menuIcon.addEventListener("click", (e) => {
            e.preventDefault();
            menuIcon.classList.toggle("change");
            sidebar.style.left = sidebar.style.left === "0px" ? "-400px" : "0px";
        });
    }

anchorsArr.forEach(anchor => {
    anchor.addEventListener("click", () => {
        menuIcon.classList.remove("change");
        sidebar.style.left = "-400px";
    });
}); 



faqsArr.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

//   window.addEventListener('load', function() {
//     document.getElementById('loader').style.display = 'none';
//     document.querySelector('.shower').style.display = 'block';
// });
});

function calculate() {
    const numberInput = document.getElementById("number");
    const number = parseFloat(numberInput.value);
    var result = 0;
    if (!isNaN(number)) {
        if(number <= 333){
            result = (20).toFixed(2) + "€";
            document.getElementById("result").textContent = `Okvirna cena: ${result}`;
        }else{
            result = (number * 0.06).toFixed(2) + "€";
            document.getElementById("result").textContent = `Okvirna cena: ${result}`;
        }
      
    } else {
      document.getElementById("result").textContent = "Vnesite število.";
    }
  }
