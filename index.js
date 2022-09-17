import {createCharacterCard} from './components/card/card.js';
import {createButton} from './components/nav-button/nav-button.js';
import {createPagination} from './components/nav-pagination/nav-pagination.js';
import {createSearchBar} from './components/search-bar/search-bar.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);

const navigation = document.querySelector('[data-js="navigation"]');
const rootUrl = 'https://rickandmortyapi.com/api/character';
// States
let maxPage = 42;
let page = 1;
let searchQuery = '';

const prevButtonText = {
  classbutton: `"button button--prev"`,
  datajs: 'button-prev',
  text: 'previous',
};

const nextButtonText = {
  classbutton: `"button button--next"`,
  datajs: 'button-next',
  text: 'next',
};

navigation.append(createButton(prevButtonText, prevPage));
navigation.append(createPagination(page, maxPage));
navigation.append(createButton(nextButtonText, nextPage));
const nextButton = document.querySelector('[data-js="button-next"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const pagination = document.querySelector('[data-js="pagination"]');

function onSubmit(event) {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  console.log(searchQuery);
  page = 1;
  fetchCharacters();
}
searchBarContainer.append(createSearchBar(onSubmit));
const searchBar = document.querySelector('[data-js="search-bar"]');

function nextPage() {
  if (page < maxPage) {
    ++page;
    fetchCharacters(`${rootUrl}?page=${page}&name=${searchQuery}`);
  }
}

function prevPage() {
  if (page > 1) {
    --page;
    fetchCharacters(`${rootUrl}?page=${page}&name=${searchQuery}`);
  }
}

async function fetchCharacters() {
  const result = await fetch(`${rootUrl}?page=${page}&name=${searchQuery}`);
  const data = await result.json();
  console.log(data);
  cardContainer.innerHTML = '';
  data.results.forEach(character => {
    const profile = {
      name: character.name,
      image: character.image,
      status: character.status,
      type: character.type,
      occurences: character.episode.length,
    };
    console.log(profile);
    cardContainer.append(createCharacterCard(profile));

    maxPage = data.info.pages;

    pagination.textContent = `${page} / ${maxPage}`;
  });
}
fetchCharacters();
