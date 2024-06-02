const priceElement = document.getElementById('price');
const pricechangeElement = document.getElementById('pricechange');

const refreshButton = document.getElementById('refreshbutton')

function updateData() {
    fetch('https://api.dexscreener.com/latest/dex/pairs/base/0xc9034c3E7F58003E6ae0C8438e7c8f4598d5ACAA')
        .then(response => response.json())
        .then(data => {
            const priceUsd = data.pairs[0].priceUsd;
            const priceChange = data.pairs[0].priceChange.h24;


            priceElement.textContent = priceUsd;  // Update the HTML element

            pricechangeElement.textContent = priceChange;  // Update the HTML element

        })
        .catchcatch(error => {
            console.log("Fetching data error: ", error)
        });
}
updateData();

// Refresh on button click 
refreshButton.addEventListener('click', updateData);
