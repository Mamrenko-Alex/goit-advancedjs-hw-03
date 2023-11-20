import axios from "axios";

axios.defaults.headers.common["x-api-key"] = 'live_tTd2DeRlMjmrwT0GvEPrcbWJhw1aaGd3xLGjpt1jvcgogKWXbIOuJRg3sms8DZoD';

// Функція для наповнення селекту варіантами
export function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds')
        .then(response => {
            return response.data;
        })
};

// Функція для виконання HTTP-запиту за інформацією про кота за ідентифікатором породи
export function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => {
            return response.data[0]
        })
}
