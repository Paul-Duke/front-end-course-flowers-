import { switchPage } from './flowerCatalog_chane_page.js';
// Виведення 6-х карток на сторінку в каталозі 
export function sixCardCatalogPerPage (pages, page) {
    const catalogItems = document.querySelectorAll('.catalog__item');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const navPoint = document.querySelector('.fourth__section').querySelectorAll('.circle');
  
    // Перевірка при багаторазовому клацанні на стрілочки "вперед" або "назад"
    if (page > pages){
      page = 1;
    } else if (page <= 0) {
      page = pages;
    } 
  
    if (pages == 1) {
      catalogItems.forEach((item) => {
        item.classList.remove('inactive');
      });
      leftArrow.classList.remove('active');
      rightArrow.classList.remove('active');
      navPoint.forEach((item) => {
        item.style.backgroundColor = '#FFC2C7';
      });
    } else {
    navPoint.forEach((item) => {
      if (item.id == page-1) {
        item.style.backgroundColor = '#FFC2C7';
      } else {
        item.style.backgroundColor = '#D9D9D9';
      }
    });
    
    catalogItems.forEach((item) => {
      if (item.id / 6 < page && item.id/6 >= page - 1) {
        item.classList.remove('inactive');
      } else {
        item.classList.add('inactive');
      }
    });
   } 
  
   switchPage(pages, page);
  }