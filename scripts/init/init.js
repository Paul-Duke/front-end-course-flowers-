import { App } from "../comments/comments_init.js";
import { initCatalog } from "../flowerCatalog/flowerCatalog_init.js";
const form = document.getElementById('form');

App.renderAll();

initCatalog();


//                                      НАДСИЛАННЯ НОВОГО КОМЕНТАРЯ НА СЕРВЕР
 
async function createComment(userName, text) {
    const comment = {
      postId: 200,
      name: userName,
      email: "didn't subscribe",
      body: text
    };
   await App.sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/comments', comment);
  
  }
    form.addEventListener('submit', (event) =>{
      event.preventDefault();
      let userName = event.currentTarget.querySelector('input').value;
      let text = event.currentTarget.querySelector('textarea').value;
      console.log(text);
      if (userName && text) {
            createComment(userName, text);
            event.currentTarget.querySelector('input').value = '';
            event.currentTarget.querySelector('textarea').value ='';         
      }
      const comments = document.getElementById('comments').querySelectorAll('.comment');
      const pagePoints = document.getElementById('reviews').querySelectorAll('.circle');
      comments.forEach((comment) =>{
        comment.remove();
      });
      pagePoints.forEach((pagePoint) =>{
        pagePoint.remove();
      });
      App.renderAll();
    });