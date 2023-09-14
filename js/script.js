const shoppingList = [
  "mela",
  "pera",
  "latte",
  "pane"
];

const list = document.querySelector("#list");
let count = 0;

while(count < shoppingList.length){
  list.innerHTML +=  `<li>${shoppingList[count]}</li>`;
  count ++;
}
