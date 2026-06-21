//import {ITours} from "../models/tours";

// указать возвращающий тип
export function initTicketElementTemplate(data: string, i: number): string {
  const tmpl: string = `
       <div data-item-index=${i} class="ticket-block">
           <p>${data}</p>
       </div>
    `;

  return tmpl;
}
