// Start Header
let header = document.createElement("header");
let leftHead = document.createElement("h2");
let rightHead = document.createElement("ul");
let listItem = [];
for (let i = 0; i < 4; i++) {
    listItem[i] = document.createElement("li");
    rightHead.append(listItem[i]);
}
// Append
leftHead.appendChild(document.createTextNode("Elzero"));
listItem[0].append(document.createTextNode("Home"));
listItem[1].append(document.createTextNode("About"));
listItem[2].append(document.createTextNode("Services"));
listItem[3].append(document.createTextNode("Contact"));
header.append(leftHead, rightHead);
// Styles
header.style.cssText =
    "display:flex; justify-content:space-between; align-items:center; padding:10px 20px; color:green;";
rightHead.style.cssText =
    "list-style:none; padding:0; margin:0; display:flex; gap:10px;";
// End Header
// Start Section
let section = document.createElement("section");
let cards = [];
let cardsNum = [];
let cardsP = [];
for (let i = 1; i < 16; i++) {
    cards[i] = document.createElement("div");
    cardsNum[i] = document.createElement("h3");
    cardsP[i] = document.createElement("p");
    cardsNum[i].append(document.createTextNode(`${i}`));
    cardsP[i].append(document.createTextNode("Product"));
    cards[i].append(cardsNum[i], cardsP[i]);
    section.append(cards[i]);
    // styles
    cards[i].style.cssText =
        " flex-basis:30%; text-align:center; padding:20px; background-color:white; box-sizing: border-box;";
    cardsP[i].style.cssText = "color:green; padding:0; margin:0;";
    cardsNum[i].style.cssText = "font-size:35px; padding:0; margin:0;";
}
// styles
section.style.cssText =
    "display:flex; flex-wrap: wrap; justify-content:center; align-items:center; background-color:#eee; gap:20px;  padding:20px; ";
// End Section
// Start Footer
let footer = document.createElement("footer");
let h2 = document.createElement("h2");
h2.append(document.createTextNode("Copyright 2022"));
footer.appendChild(h2);
// Styles
footer.style.cssText = "background-color: green; padding:20px";
h2.style.cssText =
    "color: white; width:fit-content; margin:auto; font-weight: normal;";
// End Footer

document.body.prepend(header, section, footer);
