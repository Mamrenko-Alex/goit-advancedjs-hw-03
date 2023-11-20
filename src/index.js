import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const elements = {
    breedSelect: document.querySelector('.breed-select'),
    loaderText: document.querySelector('.loader'),
    errorText: document.querySelector('.error'),
    catInfoSection: document.querySelector('.cat-info'),
    refreshButton: document.querySelector('.refresh-button'),
}

elements.refreshButton.style.display = 'none';
            
fetchBreeds()
    .then(breeds => {
        breeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.text = breed.name;
            elements.breedSelect.appendChild(option);
        });
        elements.loaderText.style.display = 'none';
        elements.breedSelect.style.display = 'block';
    })
    .catch(error => {
        console.error('Error fetching breeds:', error)
        elements.loaderText.style.display = 'none';
        elements.breedSelect.style.display = 'none';
        iziToast.error({
            error: 'Error',
            title: `Error`,
            message: `❌ Oops! Something went wrong! Try reloading the page!`,
        })
        elements.refreshButton.style.display = 'block';
    });

elements.breedSelect.addEventListener('change', clickHandler)

function clickHandler() {
    const selectedId = elements.breedSelect.value;
    elements.loaderText.style.display = 'block';
    elements.catInfoSection.style.display = 'none';
    elements.breedSelect.style.display = 'none';

    fetchCatByBreed(selectedId)
        .then(data => {
            const catInfo = data.breeds[0];
            elements.catInfoSection.innerHTML = `
            <img src="${data.url}" alt="${catInfo.name}" class="cat-img" width="450px" />
            <div class="cat-info-accent">
                <h2>${catInfo.name}</h2>
                <p>${catInfo.description}</p>
                <p><strong>Temperament:</strong> ${catInfo.temperament}</p>
                <a href="${catInfo.wikipedia_url}" target="_blank" class="more-info-button">Read more</a>
            </div>
            `
            elements.loaderText.style.display = 'none';
            elements.catInfoSection.style.display = 'flex';
            elements.breedSelect.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching breeds:', error)
            elements.loaderText.style.display = 'none';
            elements.breedSelect.style.display = 'none';
            iziToast.error({
                error: 'Error',
                title: `Error`,
                message: `❌ Oops! Something went wrong! Try reloading the page!`,
            })
            elements.refreshButton.style.display = 'block';
        })
};
