function createButton(input, onClick) {
  const button = document.createElement('button');
  button.innerHTML = `
  <button class=${input.classbutton} data-js=${input.datajs}>
        ${input.text}
      </button>`;

  button.addEventListener('click', onClick);

  return button;
}

export {createButton};
