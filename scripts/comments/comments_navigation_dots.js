  // Клас, що описує навігаційний поінт
  class PagePoint {
    constructor(id) {
      this.id = id;
    }
    createCommentNavigation(commentPages) {
      const pagePoint = document.createElement('span');
      const leftCommentsArrow = document.getElementById('leftCommentsArrow');
      const rightCommentsArrow = document.getElementById('rightCommentsArrow');
      pagePoint.id = this.id;
      pagePoint.classList.add('circle');
      if (commentPages == 1) {
        pagePoint.style.background = '#FFC2C7';
        leftCommentsArrow.classList.remove('active');
        rightCommentsArrow.classList.remove('active');
      }
  
      return pagePoint;
    }
  }
  
  // Клас, що додає до ДОМ дерева навігаційний поінт
 export class CommentsNavigation {
    static renderNavigation(commentPages) {
      const addAfterElement = document.getElementById('comments__arrow');
      const fragment = document.createDocumentFragment();
  
      for (let i = 0; i < commentPages; i++) {
        fragment.appendChild(new PagePoint(i).createCommentNavigation(commentPages));
      }
  
      addAfterElement.after(fragment);
    }
  }