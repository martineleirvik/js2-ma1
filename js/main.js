const url = "https://fakestoreapi.com/products";

const resultContainer = document.querySelector(".container");

async function getProp() {

    

        const response = await fetch(url);

        const results = await response.json();

        console.log(results);

        resultContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            console.log(results[i].title);
            console.log(results[i].price);

            resultContainer.innerHTML += `<div class="card">
                                            <h2>${results[i].title}</h2>
                                            <p> Price: ${results[i].price}</p>                                        
                                        </div>`
        }

    
    
}

getProp();