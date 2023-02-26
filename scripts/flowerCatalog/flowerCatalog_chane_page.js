import { sixCardCatalogPerPage } from "./flowerCatalog_display_cards.js";
//перехід зі сторінки на сторінку в каталозі
export function switchPage(pages, page) {
    function plusPage() {
      page++;
      sixCardCatalogPerPage(pages, page);
      rightArrow.removeEventListener('click', plusPage);
      leftArrow.removeEventListener('click', minusPage);
    }
    function minusPage() {
      page--;
      sixCardCatalogPerPage(pages, page);
      leftArrow.removeEventListener('click', minusPage);
      rightArrow.removeEventListener('click', plusPage);
    }
      rightArrow.addEventListener('click', plusPage);
      leftArrow.addEventListener('click', minusPage);
  }

  