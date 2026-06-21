
/* Общие методы используются для вставки текста в header   footer*/

/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
export function initHeaderTitle(ticketName, selector) {
    const headerElement= document.querySelector('header');
    const targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}

export function initFooterTitle(ticketName, selector) {
    const headerElement = document.querySelector('footer');
    const targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}