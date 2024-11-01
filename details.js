const stars = document.querySelectorAll(".nejma i");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {

        console.log("Star clicked at index:", index + 1);
        rating(index + 1);
    });

});
function rating(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = "gold"; 
        } else {
            star.style.color = "white"; 
        }
    });
}