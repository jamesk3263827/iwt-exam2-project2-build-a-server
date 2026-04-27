let timerId = null;
let vistaImage;
let div;
let locationInput;
let searchButton;

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    vistaImage = document.createElement("img");
    div = document.getElementById("vistaImgCarousel");
    div.appendChild(vistaImage);
    locationInput = document.getElementById("category");
    searchButton = document.getElementById("fetchVistaImgBtn");

    searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        checkEntry();
    });

    locationInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkEntry();
        }
    });
};

function checkEntry () {

    if (locationInput.value === "") {
        locationInput.classList.add("emptyBox");    

    } else {
        locationInput.classList.remove("emptyBox");
        clearInterval(timerId);
        document.getElementById("searchTerm").textContent = "";
        vistaImage.src = "";
        fetchVistaImage(locationInput.value);
    }
};

async function fetchVistaImage(vista) {
    let fetchURL = `http://127.0.0.1:3000/api/img?category=${vista}`;
    let response = await fetch (fetchURL);
    let locationArray = await response.json();

    if (locationArray.error) {
		document.getElementById("vistaImgCarousel").innerHTML = `Location '${vista}' not found`;

    } else {
        handleResponse(locationArray);
    }
}

function handleResponse(locationArray) {
    let indexCount = 0;
    
    const displayedText = locationInput.options[locationInput.selectedIndex].text;
    document.getElementById("searchTerm").textContent = `${displayedText}`;

    timerId = setInterval(function() {
        vistaImage.src = `${locationArray.message[indexCount]}`;
        vistaImage.width = "500";
        indexCount = (indexCount + 1) % locationArray.message.length;
    }, 3000);
}