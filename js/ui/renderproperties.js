export function renderProp(propToRender) {
    
    const resultContainer = document.querySelector(".container");
    resultContainer.innerHTML = "";

    propToRender.forEach(function (card) {
        resultContainer.innerHTML += `<div class="card">
                                        <h2>${card.title}</h2>
                                        <p> Price: ${card.price}</p>                                        
                                    </div>`
    });
}