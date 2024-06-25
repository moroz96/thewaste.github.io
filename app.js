let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = '${tg.initDataUnsafe.first_name}${tg.initDataUnsafe.last_name}${tg.initDataUnsafe.user.id}';

usercard.appendChild(p);