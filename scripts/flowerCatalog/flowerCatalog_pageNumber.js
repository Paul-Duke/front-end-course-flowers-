// Рахує кількість сторінок в каталозі
export function catalogPageNumber (flowers) {
    const catalogElements = flowers.length;
    const catalogPages = Math.ceil(catalogElements / 6);

    return catalogPages;
  }