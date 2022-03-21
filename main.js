"use strict";

console.log("ready");
window.onload = function (){
    let generate = document.querySelector("#generate");
    generate.onclick = function (){

        let season = getRandomInteger(1, document.querySelector("#season").value);
        let episode = getRandomInteger(1, document.querySelector("#episode").value);


        console.log("Staffel: "+ season);
        console.log("Folge: "+ episode);

        createDiv(season, episode);

    }
}





function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function createDiv(season, episode){
    let watch = document.querySelector("#watch");
    empty(watch);

    let p1 = document.createElement("h3");
    let p2 = document.createElement("h3");

    let h1 = document.createElement("h1");


    p1.append("Staffel: ");
    p1.append(season);
    p2.append("Folge: ");
    p2.append(episode);

    h1.id = "towatch";
    h1.append("WATCH NOW:")

    watch.append(h1);
    watch.append(p1);
    watch.append(p2);


}

function empty(element) {
    while(element.firstElementChild) {
        element.firstElementChild.remove();
    }
}
