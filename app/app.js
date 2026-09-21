import { changePage } from "../model/model.js";

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const pageName = link.dataset.page;

        changePage(pageName);

    });

});

changePage("home");


