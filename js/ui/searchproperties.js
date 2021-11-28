import { renderProp } from "./renderproperties.js";

export function searchProp(results) {

    const search = document.querySelector(".search");
    const resultContainer = document.querySelector(".container");

    search.onkeyup = function (event) {

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProp = results.filter(function (card) {
            if (card.price <= searchValue) {
                return true;
            }
            else {
                resultContainer.innerHTML += `<p> There are no items under the price you typed.</p>`
            }
        });

        renderProp(filteredProp);
    };
}