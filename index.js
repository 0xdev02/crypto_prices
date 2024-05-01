const priceElement = document.getElementById('price');
const pricechangeElement = document.getElementById('pricechange');

const refreshButton = document.getElementById('refreshbutton')

function updateData() {
    fetch('https://api.dexscreener.com/latest/dex/pairs/ethereum/0x76366D95c2016446247296Ea50c8D06D0585ae00')
        .then(response => response.json())
        .then(data => {
            const priceNative = data.pairs.priceUsd;
            const priceChange = data.pairs.priceChange.h24;


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
