import { DisplayComments } from "./comments_display.js";
// Клас, що відповідає за навігацію по коментарям
export class NavigationArrows {
    static arrows(commentPages, page) {
      function plusPage() {
        page++;
        DisplayComments.pageChange(commentPages, page);
        rightCommentsArrow.removeEventListener('click', plusPage);
        leftCommentsArrow.removeEventListener('click', minusPage);
      }
      function minusPage() {
        page--;
        DisplayComments.pageChange(commentPages, page);
        leftCommentsArrow.removeEventListener('click', minusPage);
        rightCommentsArrow.removeEventListener('click', plusPage);
      }
      const leftCommentsArrow = document.getElementById('leftCommentsArrow');
      const rightCommentsArrow = document.getElementById('rightCommentsArrow');
      rightCommentsArrow.addEventListener('click', plusPage);
      leftCommentsArrow.addEventListener('click', minusPage);
    }
  }
  