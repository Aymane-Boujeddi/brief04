

const movies = document.querySelectorAll(".card");
const searchInput = document.getElementById("searchbar");

searchInput.addEventListener("input" , () => {
    const value = searchInput.value.toLowerCase();

    movies.forEach(movie => {
        let content = movie.textContent.toLowerCase();
        if(content.includes(value)){
            movie.style.display = "";

        }else {
            movie.style.display = "none";
        }
    });
})

var sliders  = document.querySelectorAll(".animation");

sliders.forEach(function(slider)  {
    slider.animate(
        
        [
            {
                transform : "translateX(0%)"
            },
            {
                transform : "translateX(-500%)"
            },
            {
                transform : "translateX(0%)"
            }
        ],
        {
            duration :20000,
            iterations : Infinity,
            behavior : "smooth",
        })
});


let cartes = document.querySelectorAll(".carte");
let after = document.querySelector("#right");
let before = document.querySelector("#left");



function scrollToLeft() {
    const container = document.querySelector(".slide");
    container.scrollBy({
        top: 0,
        left: -320, 
        behavior: "smooth"
    });
}


function scrollToRight() {
    const container = document.querySelector(".slide");
    container.scrollBy({
        top: 0,
        left: 320, 
        behavior: "smooth"
    });
}





