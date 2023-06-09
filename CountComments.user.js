// ==UserScript==
// @name         Count comments
// @namespace    https://github.com/jokeri2222/
// @version      1.0
// @description  Count comments for Wilma
// @author       jokeri2222
// @updateURL    https://github.com/jokeri2222/Count-comments-For-Wilma/raw/main/CountComments.user.js
// @downloadURL  https://github.com/jokeri2222/Count-comments-For-Wilma/raw/main/CountComments.user.js
// @match        https://pori.inschool.fi/*/attendance/view*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=inschool.fi
// @grant        none
// ==/UserScript==

var Merkit = {
    Selvittämättä:0,
    Terveydellinen:0,
    Kehu:0,
    Huomautus:0,
    Sopimaton_käytös:0,
    LUPA:0,
    Luvaton_poissaolo:0,
    Muu_poissaolo:0,
    Muu_koulutyö:0,
    Myöhästyminen:0,
    Läksypiiri:0,
    Läksypiiri_OK:0,
    Laite_OK:0,
    Laite_VIKA:0
}

var Merkinnät = document.querySelectorAll('td.event').forEach(function(Merkintä){
    Merkintä = Merkintä.title.split("; ")[1].split(" /")[0].split(", ")[0].replace(" ", "_")
    if (Object.keys(Merkit).includes(Merkintä)) {
        Merkit[Merkintä]++;
    }
})

console.log(Merkit)

Object.values(Merkit).forEach(function(num, i){
    document.querySelector(".legend").firstElementChild.firstElementChild.children[i].firstElementChild.innerText+=" : "+num
})

var main = document.querySelector("main")
var second = document.querySelectorAll("div.row")[2]

var fragment = document.createDocumentFragment();
fragment.appendChild(second);
main.appendChild(fragment);

var lastIndex = document.querySelector(".datatable").querySelector("thead").firstElementChild.children.length-1
document.querySelector(".datatable").querySelector("thead").firstElementChild.children[lastIndex-1].innerText = "Poissaolot yhteensä"
