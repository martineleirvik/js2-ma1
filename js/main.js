import { renderProp } from "./ui/renderproperties.js";
import { searchProp } from "./ui/searchproperties.js"


const url = "https://fakestoreapi.com/products";

async function getProp() {

    try {

        const response = await fetch(url);

        const results = await response.json();

        console.log(results);

        renderProp(results);
        searchProp(results);

    } catch (error) {
        console.log(error);
    }   
    
}

getProp();