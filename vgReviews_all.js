/*
    Author: David Scranton
    ISU Netid : dscranto@iastate.edu
    Date : March 7th, 2024
*/

fetch("./vgReviews.json")
.then(response => response.json())
.then(myReviews => loadReviews(myReviews));

function loadReviews(myReviews){
    var container1 = document.getElementById("row1");
    var container2 = document.getElementById("row2");
    for (let i=0; i<myReviews.reviews.length; i++){
        let title = myReviews.reviews[i].title;
        let review = myReviews.reviews[i].review;
        let rating = myReviews.reviews[i].rating;
        let url = myReviews.reviews[i].url;
        
        let division = document.createElement("div");
        division.classList.add("col-lg-4");
        division.innerHTML = `
        <img src=${url} width = "200" />
        <h2 class="fw-normal">${title}</h2>
        <p>${rating} / 10</p>
        <p>${review}</p>
        `;
        if(i < 3){
            console.log("1");
            container1.appendChild(division);
        }else{
            console.log("2");
            container2.appendChild(division);
        }
    }
}
