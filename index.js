const priceElement = document.getElementById('price');
const pricechangeElement = document.getElementById('pricechange');

const refreshButton = document.getElementById('refreshbutton')

function updateData() {
    fetch('https://api.dexscreener.com/latest/dex/pairs/bsc/0x36696169C63e42cd08ce11f5deeBbCeBae652050')
        .then(response => response.json())
        .then(data => {
            const priceNative = data.pairs[0].priceNative;
            const priceChange = data.pairs[0].priceChange.h24;


            priceElement.textContent = priceNative;  // Update the HTML element

            pricechangeElement.textContent = priceChange;  // Update the HTML element

        })
        .catchcatch(error => {
            console.log("Fetching data error: ", error)
        });
}
updateData();

// Update every 5 seconds
setInterval(updatePrice, 5000);
setInterval(updateData, 5000);

// Refresh on button click (optional)
refreshButton.addEventListener('click', updateData);