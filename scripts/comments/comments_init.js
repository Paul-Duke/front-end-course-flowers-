import { PageNumber } from './comments_pageNumber.js';
import { CommentsNavigation } from './comments_navigation_dots.js';
import { DisplayComments } from './comments_display.js';

// Клас, що описує об'єкт - коментар клієнта 
class Comment {
    constructor(comment) {
      this.postId = comment.postId;
      this.id = comment.id;
      this.name = comment.name;
      this.email = comment.email;
      this.body = comment.body;
      this.imageMan = 'images/reviews-photo2.png';
      this.imageWoman = 'images/reviews-photo1.png';
      this.date = new Date().toISOString().slice(0, 10);
    }
  
    createCommentContent() {
      let userComment = '';
      if (this.id % 2 !== 0) {
        userComment = `<span class="comment inactive" id="${this.id}">
        <img class="review__photo" id="review__photo" src="${this.imageMan}" alt="Чоловік">
        <span class="review__text">
          <p>“${this.body}”</p>
          <div class="horizontal__line"></div>        
          <p class="user">${this.name}, дата:${this.date}</p>
        </span>
        <span class="empty"></span>
      </span>`;
      } else {
        userComment = `<span class="comment inactive" id="${this.id}">
        <span class="empty"></span>
        <img class="review__photo" id="review__photo" src="${this.imageWoman}" alt="Жінка">
        <span class="review__text">
          <p>“${this.body}”</p>
          <div class="horizontal__line"></div>        
          <p class="user">${this.name}, дата:${this.date}</p>
        </span>
      </span>`;
      }
  
      const template = document.createElement('template');
  
      template.innerHTML = userComment;
  
      return template.content;
    }
  }
  

  
  // Крас, що додає до DOM дерева коментарі
  export class App {
    static async renderAll() {
          const res = await App.sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/comments');
          const el = document.getElementById('comments');
          const fragment = document.createDocumentFragment();
  
          const commentPages = PageNumber.pages(res);
          CommentsNavigation.renderNavigation(commentPages);
          res.forEach((comment) => {
            fragment.appendChild(new Comment(comment).createCommentContent());
            el.appendChild(fragment);
          });
          DisplayComments.pageChange(commentPages, 1);
    }
    static async sendHttpRequest(method, url, comment) {
      return fetch(url, {
          method: method,
          headers: {
            "Content-type": "application/json",
            },
          body: JSON.stringify(comment)
      })
            .then((res) => res.json());
    }
  }
  
  
  
  
  
  

  