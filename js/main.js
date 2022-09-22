let sideMenu = document.querySelector('aside');
let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


menuBtn.addEventListener("click",(e)=>{
    sideMenu.style.display = "block"
})
closeBtn.addEventListener("click", (e) => {
  sideMenu.style.display = "none";
});

// change theme 
themeToggler.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme-variable");
    themeToggler.querySelector(".fa-sun").classList.toggle("active");
    themeToggler.querySelector(".fa-moon").classList.toggle("active");
})

let tableBody = document.querySelector(".recent-orders table tbody");
console.log(tableBody);
tableBody.innerHTML = orders.map(order=>{
    return `<tr>
                <td>${order.productName}</td>
                <td> ${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="warning">${order.shipping}</td>
                <td class="primary">details</td>
            </tr>`;
}).join("")