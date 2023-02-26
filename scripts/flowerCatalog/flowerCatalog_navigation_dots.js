// Створення елементу - навігаційної крапки 
function createNavigationCatalog (i) {
    const navPoint = document.createElement('span');
    navPoint.classList.add('circle');
    navPoint.id = i;

    return navPoint;
  }

//Додавання елементів - навігаційних крапок до DOM дерева
  function appendCatalogNavigationContent (content) {
    const el = document.getElementById('arrow');

    el.after(content);
  }

// Створення фрагменту з навігаційними крапками, що буде додаватися до ДОМ дерева в Каталог
 export function initNavigation (pages) {
   const fragment = document.createDocumentFragment();
   
   for (let i = 0; i < pages; i++) {
    fragment.appendChild(createNavigationCatalog(i));
   }

   appendCatalogNavigationContent(fragment);

 }