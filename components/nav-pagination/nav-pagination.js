function createPagination(page, maxPage) {
  const pagination = document.createElement('span');
  pagination.textContent = `${page} / ${maxPage}`;
  pagination.classList.add('navigation__pagination');
  pagination.setAttribute('data-js', 'pagination');
  return pagination;
}

export {createPagination};
