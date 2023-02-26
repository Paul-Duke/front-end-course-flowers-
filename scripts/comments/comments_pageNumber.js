
  // Клас, що рахує кількість сторінок
 export class PageNumber {
    static pages(comments) {
      const commentPages = Math.ceil(comments.length / 10);
      return commentPages;
    }
  }