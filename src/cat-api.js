import axios from "axios";

axios.defaults.headers.common["x-api-key"] = 'live_tTd2DeRlMjmrwT0GvEPrcbWJhw1aaGd3xLGjpt1jvcgogKWXbIOuJRg3sms8DZoD';

// Функція для наповнення селекту варіантами
export function fetchBreeds() {
    return new Promise((resolve, reject) => {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const breeds = data.map(breed => ({ id: breed.id, name: breed.name }));
                resolve(breeds);
            })
            .catch(error => {
                reject(error)
            });
    });
};

// Функція для виконання HTTP-запиту за інформацією про кота за ідентифікатором породи
export function fetchCatByBreed(breedId) {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => {
            resolve(response.data[0]);
      })
      .catch(error => {
        reject(error);
      });
  });
}
