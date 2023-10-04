
let histoire = document.getElementById('histoire-01') 
let vision = document.getElementById('vision-02')
let valeur = document.getElementById('valeur-03')

let histoireButton = document.getElementById('histoire') 
let visionButton = document.getElementById('vision') 
let valeurButton = document.getElementById('valeur') 

histoireButton.addEventListener('click',function() {
    histoire.style.display = "block";

    vision.style.display = "none";
    valeur.style.display = "none";

})

visionButton.addEventListener('click',function() {
    vision.style.display = "block";

    histoire.style.display = "none";
    valeur.style.display = "none";

})



valeurButton.addEventListener('click',function() {
    valeur.style.display = "block";

    histoire.style.display = "none";
    vision.style.display = "none";
})