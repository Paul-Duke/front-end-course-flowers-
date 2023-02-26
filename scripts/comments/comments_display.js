import { NavigationArrows } from "./comments_change_page.js";
// Клас, що рообить активними 5 коментарів на сторінку
export class DisplayComments {
    static pageChange(commentPages, page){
      const items = document.querySelectorAll('.comment');
      const pagePoint = document.querySelector('.five__section').querySelectorAll('.circle');
      if (commentPages == 1) {
        items.forEach((item) => {
          item.classList.remove('inactive');
        });
      } else {
        // Перевірка при багаторазовому клацанні на стрілочки "вперед" або "назад"
        if (page > commentPages) {
          page = 1;
        } else if (page <= 0) {
          page = commentPages;
        } 
        pagePoint.forEach((el) => {
          if (el.id == page-1) {
            el.style.backgroundColor = '#FFC2C7';
          } else {
            el.style.backgroundColor = '#D9D9D9';
          }
        });
        items.forEach ((item) => {
          if (item.id >= (page*10 - 9) && item.id <= page*10) {
            item.classList.remove('inactive');
          } else {
            item.classList.add('inactive');
          }
        });
        NavigationArrows.arrows(commentPages, page);
      }
    }
  } 