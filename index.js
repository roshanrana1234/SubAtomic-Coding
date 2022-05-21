console.log("Roshan Rana");
// ========================================
// Creating a NavBar component
// ========================================

const mobile_nav = document.querySelector(".mobile-navbar-btn")
const headerElem = document.querySelector('.header')

mobile_nav.addEventListener("click", () => {
    headerElem.classList.toggle('active')
})







// ========================================
// Creating a Portfolio tabbed component
// ========================================
const p_btns = document.querySelector(".p-btns")
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', function (e) {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked)

    // if (!p_btn_clicked.classList.contians(" p-btn")) return;

    p_btn.forEach(function (value) {
        value.classList.remove("p-btn-active");
    });

    p_btn_clicked.classList.add("p-btn-active")

    // data-btn-num = "1" => btnNum
    const btn_num = p_btn_clicked.dataset.btnNum
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach(function (e) {
        e.classList.add("p-image-not-active")
    });

    img_active.forEach((element) => element.classList.remove('p-image-not-active'));


})
// Swiper Js Code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// Scrolll to top 
const heroSection = document.querySelector(".section-hero")
const footerElement = document.querySelector('.section-footer')
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style")
scrollElement.innerHTML = `<ion-icon name="arrow-round-up" class="scroll-top" ></ion-icon>`
console.log(scrollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" })
}

footerElement.after(scrollElement);
scrollElement.addEventListener("click", scrollTop)



const counterNum = document.querySelectorAll(".counter-number")
const speed = 200;

counterNum.forEach(function (value) {
    const updateNumber = () => {
        const targetNumber = parseInt(value.dataset.number);
        // console.log(targetNumber)
        const intialNum = parseInt(value.innerText);
        // console.log(intialNum)
        const increamentNum = Math.trunc(targetNumber / speed)
        // console.log(increamentNum)

        if (intialNum < targetNumber) {
            value.innerText = ` ${intialNum + increamentNum}+ `
            setTimeout(updateNumber, 10)
        }
    }

    updateNumber();
})
