/*
    Author: David Scranton
    ISU Netid : dscranto@iastate.edu
    Date : March 7th, 2024
*/

fetch("./data.json")
.then(response => response.json())
.then(myReviews => loadReviews(myReviews));

function loadReviews(myReviews){
    let title1 = document.getElementById("title1");
    let img1 = document.getElementById("img1");
    let title2 = document.getElementById("title2");
    let img2 = document.getElementById("img2");
    let rate1 = 0;
    let rate2 = 0;

    for (let i=0; i<myReviews.reviews.length; i++){
        let title = myReviews.reviews[i].title;
        let rating = myReviews.reviews[i].rating;
        let url = myReviews.reviews[i].url;

        if(rating > rate1 && rating > rate2){
            rate2 = rate1;
            img2.src=img1.src;
            title2.innerText= title1.innerText;
            rate1 = rating;
            img1.src=`${url}`;
            title1.innerText= `${title}`;
        }else if(rating > rate2){
            rate2 = rating;
            img2.src=`${url}`;
            title2.innerText= `${title}`;
        }
    }
}