/*
    Author: David Scranton
    ISU Netid : dscranto@iastate.edu
    Date : March 7th, 2024
*/

fetch("./midterm.json")
.then(response => response.json())
.then(myReviews => loadReviews(myReviews));

function loadReviews(myReviews){
    var mainContainer = document.getElementById("reviews");

    for (let i=0; i<myReviews.reviews.length; i++){
        let title = myReviews.reviews[i].title;
        let year = myReviews.reviews[i].year;
        let review = myReviews.reviews[i].review;
        let rating = myReviews.reviews[i].rating;
        let url = myReviews.reviews[i].url;

        let division = document.createElement("div");
        division.innerHTML = `
        <h3>${title}</h3>
        <p>${year}</p>
        <img src=${url} width = "200" />
        <p>${rating} / 10</p>
        <p>${review}</p>
        `;
        mainContainer.appendChild(division);
    }
}