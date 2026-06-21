import { Modal } from "../../classess/modal";
import { toursDataArray } from "@services/app/initApp";
import { ITours } from "../../models/tours";

type ModalType = "order";

export function openModal(type: ModalType, i: number): void {
  const data: ITours = toursDataArray[i];

  if (!data) {
    return;
  }

  const tourId: string = data.id;

  switch (type) {
    case "order":
      const modalTemplate: string = `
        <div> 
          <p data-moda-id="tour-modal" class="close-modal">x</p>
          <h3>${data.name}</h3>
          <p>${data.description}</p>
         
          <div data-tour-id="${tourId}" class="ticket-submit">
            <a href="ticket.html?tourId=${tourId}">Купить билет</a>
          </div>
        </div>
      `;

      const modal: Modal = new Modal("tour-modal");
      modal.open(modalTemplate);
      break;
  }
}
