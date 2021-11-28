import { renderProp } from "./renderproperties.js";

export function searchProp(results) {

    const search = document.querySelector(".search");

    search.onkeyup = function (event) {

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProp = results.filter(function (card) {
            if (card.price <= searchValue) {
                return true;
            }
        });

        renderProp(filteredProp);
    };
}