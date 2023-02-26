import { catalogPageNumber } from './flowerCatalog_pageNumber.js';
import { initNavigation } from './flowerCatalog_navigation_dots.js';
import { sixCardCatalogPerPage } from './flowerCatalog_display_cards.js';                              
 // Cтворення елемента картки каталогу
  function createCatalogContentTemplate (flower, id) {
    const flowerCard = `<span class="catalog__item inactive" id="${id}">
    <img class="catalog__image" src="${flower.image}" alt="${flower.name}">
    <h2>${flower.name}: <br>${flower.flovers}</h2>
    <p>${flower.price}</p>
    <input class="white__button" type="submit" value="В кошик">
    </span>`;

    return createCatalogFragmentTemplate(flowerCard);
  }

  // Створення елементу template для каталогу
  function createCatalogFragmentTemplate (str) {
    const template = document.createElement('template');

    template.innerHTML = str;

    return template.content;
  }

  // Додавання елементу template до ДОМ дерева в Каталог
  function appendCatalogContent (content) {
    const el = document.getElementById('catalog');

    el.prepend(content);
  }

 
  // Створення фрагменту з картками, що буде додаватися до ДОМ дерева в Каталог
  export function initCatalog() {
    fetch('https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f')
    .then((res) => res.json())
    .then((data) => {
        const fragment = document.createDocumentFragment();
        let id = 0;
        data.forEach((flower) => {
          fragment.appendChild(createCatalogContentTemplate(flower, id));
          id++;
        });
        appendCatalogContent(fragment);
        initNavigation(catalogPageNumber(data));
        sixCardCatalogPerPage(catalogPageNumber(data), 1);
    });    
  }





