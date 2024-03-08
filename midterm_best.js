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
    let spot1 = document.createElement("div");
    let rate1 = 0;
    let spot2 = document.createElement("div");
    let rate2 = 0;

    for (let i=0; i<myReviews.reviews.length; i++){
        let title = myReviews.reviews[i].title;
        let year = myReviews.reviews[i].year;
        let review = myReviews.reviews[i].review;
        let rating = myReviews.reviews[i].rating;
        let url = myReviews.reviews[i].url;

        if(rating > rate1 && rating > rate2){
            spot2.innerHTML = spot1.innerHTML;
            rate2 = rate1;
            rate1 = rating;
            spot1.innerHTML = `
            <h3>${title}</h3>
            <p>${year}</p>
            <img src=${url} width = "200" />
            <p>${rating} / 10</p>
            <p>${review}</p>
            `;
        }else if(rating > rate2){
            rate2 = rating;
            spot2.innerHTML = `
            <h3>${title}</h3>
            <p>${year}</p>
            <img src=${url} width = "200" />
            <p>${rating} / 10</p>
            <p>${review}</p>
            `;
        }
    }
    mainContainer.appendChild(spot1);
    mainContainer.appendChild(spot2);
}