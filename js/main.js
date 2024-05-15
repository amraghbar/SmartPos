const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    speed: 400,
    spaceBetween: 100,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    scrollbar: {
        el: '.swiper-scrollbar',

    },
});
let slider = document.querySelector(".swiper .swiper-wrapper");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let sliders = [
    { name: "slider1", title: "this is slider 1", imgurl: "1.svg" },
    { name: "slider1", title: "this is slider 1", imgurl: "2.svg" },
    { name: "slider1", title: "this is slider 1", imgurl: "3.svg" },
]
function render() {
    sliders.forEach((element, index) => {
        slider.innerHTML += `
      
        <div class="swiper-slide">
        <img src="css/img/${element.imgurl}" alt="">
      </div> 
        `
    });
}
check();
render();
//validation 
let checkbox = document.querySelector("#rMe");
function login(event) {
    event.preventDefault()
    let emailval = email.value.trim().toLowerCase();
    let passwordval = password.value;
    let checkboxval = checkbox.checked;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let check = 0;
    let regTe = regex.test(emailval);
    if (regTe == false) {
        Swal.fire({
            icon: "error",
            title: "Email is invaild!",
            timer: 2000,
        });
    }
    else {
        check++;

    }
    if (passwordval && passwordval.length > 4 && regTe == true) {
        let rso = {
            mse: "login vaild",
            token: 12345,
        }
        if (checkboxval) {
            localStorage.setItem("token", rso.token)
        }
        else {
            sessionStorage.setItem("token", rso.token)
        }
        window.location.href = "./home.html"
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Data is invaild!",
          });
    }
}
function check() {
    let token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
        let reso = true;
        if (reso) {
            window.location.href = "./home.html"
        }
        else{
        localStorage.clear();
        sessionStorage.clear();
        }
    }
    else{
        localStorage.clear();
        sessionStorage.clear();
        }

}

//hit
window.addEventListener("resize", ()=> {
    let width= window.innerWidth;
if(width>767){
}
})
