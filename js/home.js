let activTap = 1;
function renderAside() {
    let ul = document.querySelector("#centerSe ul");
    let menuTap = [
        {
            name: "Dashboard",
            icon: "fa-grip",
            tab: "./pages/dahboadr.html"
        },
        {
            name: "Food & Drinks",
            icon: "fa-burger",
            tab: "./pages/Food.html"

        },
        {
            name: "Messages",
            icon: "fa-message",
            tab: "./pages/Messages.html"

        },
        {
            name: "Bills",
            icon: "fa-file-invoice-dollar",
            tab: "./pages/Bills.html"

        },
        {
            name: "Settings",
            icon: "fa-gear",
            tab: "./pages/Settings.html"

        },

    ];
    ul.innerHTML = "";
    menuTap.forEach((e, index) => {
        ul.innerHTML += `
        <li class="d-flex align-items-center gap-3 mb-1 ${index == activTap ? "active" : null}"
         onclick="opentap('${e.tab}', '${index}')">
        <i class="fa-solid ${e.icon}" style="font-size: 10px"></i>
        <p class="mb-0" style="font-size: 10px">${e.name} </p>
        </li>
        `
    })
}
renderAside();
function renderother() {
    let ul = document.querySelectorAll("#centerSe ul")[1];
    let menuTap = [
        {
            name: "Notifications",
            icon: "fa-bell",
            tab: "./pages/Notifications.html",
        },
        {
            name: "Support",
            icon: "fa-headset",
            tab: "./pages/Support.html",
        },
    ];
    ul.innerHTML = "";

    menuTap.forEach((e, index) => {
        ul.innerHTML += `
        <li class="d-flex align-items-center gap-3 mb-1"
         onclick="opentap2('${e.tab}', '${index}')">
        <i class="fa-solid ${e.icon}" style="font-size: 10px"></i>
        <p class="mb-0" style="font-size: 10px">${e.name} </p>
        </li>
        `
    })
}
renderother();

function opentap(tabname, index) {
    activTap = index
    renderAside();

    let iframe = document.querySelector("iframe");
    iframe.setAttribute("src", `./${tabname}`)
}
function opentap2(tabname, index) {

    let iframe = document.querySelector("iframe");
    iframe.setAttribute("src", `./${tabname}`)
}

const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menui');
const mainContent = document.querySelector('main');

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
    mainContent.classList.toggle('show-sidebar');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
        sidebar.classList.remove('show-sidebar');
        mainContent.classList.remove('show-sidebar');
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', () => {
        localStorage.clear();

        sessionStorage.clear();

        window.location.href = 'index.html'; 
    });
});
