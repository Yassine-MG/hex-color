
let body = document.querySelector('body');
let h2 = document.querySelector('.first');
let btn= document.querySelector(".btn");
let h2_1 = document.querySelector(".second");



   function randomColors() {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        body.style.backgroundColor = "#"+ randomColor ;
        let bg = "#"+ randomColor ;
        h2.innerText = "En HexCode La Couleur Est : " + bg+";";
        bg = body.style.backgroundColor;
        h2_1.innerText = "En RGB La Couleur Est : " + bg+";";
    };




    btn.addEventListener('click',() =>{
        randomColors();
    });

