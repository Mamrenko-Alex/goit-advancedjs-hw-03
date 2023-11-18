import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const elements = {
    breedSelect: document.querySelector('.breed-select'),
    loaderText: document.querySelector('.loader'),
    errorText: document.querySelector('.error'),
    catInfoSection: document.querySelector('.cat-info'),
}

elements.loaderText.style.display = 'none';
elements.errorText.style.display = 'none';

fetchBreeds()
    .then(breeds => {
        breeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.text = breed.name;
            elements.breedSelect.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching breeds:', error)
    });

elements.breedSelect.addEventListener('change', clickHandler)

function clickHandler() {
    const selectedId = elements.breedSelect.value;

    fetchCatByBreed(selectedId)
        .then(data => {
            const catInfo = data.breeds[0];
            elements.catInfoSection.innerHTML = `
            <img src="${data.url}" alt="${catInfo.name}" width="250px"/>
            <h2>${catInfo.name}</h2>
            <p>${catInfo.description}</p>
            <p><strong>Temperament:</strong> ${catInfo.temperament}</p>
            <a href="${catInfo.wikipedia_url}" target="_blank">Read more</a>
            `
        })
        .catch(error => {
            console.error('Error fetching breeds:', error)
        });
};
