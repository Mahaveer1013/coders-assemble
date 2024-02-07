function open_menu() {
  let menu_bar = document.querySelector(".menu-bar-div");
  let nav_list = document.querySelector(".nav-list");
  let menu_btn = document.querySelector(".menu-btn");

  nav_list.classList.toggle("active");
  menu_btn.classList.toggle("fa-bars");
  menu_btn.classList.toggle("fa-times");
}

let days_div = document.querySelector(".days");
let hours_div = document.querySelector(".hours");
let minutes_div = document.querySelector(".minutes");
let seconds_div = document.querySelector(".seconds");

const targetDate = new Date(2024, 2, 30, 12, 0, 0); //  march 30- 2024- 12:00:00

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  days_div.textContent = ` ${days} `;
  hours_div.textContent = ` ${hours} `;
  minutes_div.textContent = ` ${minutes} `;
  seconds_div.textContent = ` ${seconds} `;
}
setInterval(updateCountdown, 1000);
