function createSearchBar(onSubmit) {
  const searchbarItem = document.createElement('form');
  searchbarItem.classList.add('search-bar');
  searchbarItem.setAttribute('action', '""');
  searchbarItem.setAttribute('data-js', 'search-bar');
  searchbarItem.innerHTML = `
  <input
  name="query"
  class="search-bar__input"
  type="text"
  placeholder="search characters"
  aria-label="character name"
/>
<button class="search-bar__button" aria-label="search for character">
  <img class="search-bar__icon" src="assets/magnifying-glass.png" alt="" />
</button>
  `;

  searchbarItem.addEventListener('submit', onSubmit);
  return searchbarItem;
}
export {createSearchBar};
