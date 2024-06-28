const modal = document.getElementById("recommendationModal");
const btn = document.getElementById("recommendationButton");
const span = document.getElementsByClassName("close-button")[0];
const form = document.getElementById("sizeForm");
const result = document.getElementById("recommendationResult");

btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.onsubmit = function(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);

    let recommendedSize;

    if (height < 150 && weight < 45) {
        recommendedSize = 'XS';
    } else if (height >= 150 && height < 160 && weight >= 45 && weight < 55) {
        recommendedSize = 'S';
    } else if (height >= 160 && height < 170 && weight >= 55 && weight < 65) {
        recommendedSize = 'M';
    } else if (height >= 170 && height < 180 && weight >= 65 && weight < 75) {
        recommendedSize = 'L';
    } else if (height >= 180 || weight >= 75) {
        recommendedSize = 'XL';
    } else {
        recommendedSize = 'M';
    }

    result.innerHTML = `Recommended Size: ${recommendedSize}`;
}
