import { getTicketById, postTicketData } from "@rest/tickets";
import "@myCss"; // добавлена новая ссылка - ссылка ведет на один файл
import "@assets/styles/tickets.scss";
import { initTicketElementTemplate } from "../../templates/ticketInfo";
import { IVipTicket, TicketType, ITicket } from "../../models/ticket/ticket";
import { initFooterTitle, initHeaderTitle } from "@services/general/general";

let ticketInstance: TicketType;
let ticketPostInstance;
const clientType = "custom";

// init main  data
initApp();
registerConfirmButton();

function initApp(): void {
  const params: URLSearchParams = new URLSearchParams(window.location.search);
  const tourId: string | null = params.get("tourId");

  if (!tourId) {
    console.error("tourId не найден в адресной строке");
    return;
  }
  const ticketData: Promise<IVipTicket[]> = getTicketById<IVipTicket>(tourId);
  ticketData.then((data): void => {
    ticketInstance = data[0];
    const ticketName =
      typeof ticketInstance?.name === "string" ? ticketInstance?.name : "";
    initHeaderTitle(ticketName, "h3");
    initFooterTitle("Туры по всему миру", "h2");
    initTicketInfo(ticketInstance);
  });
}

/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
    - Указать в методах возвращающие типы, в теле функции также указать типы чтобы не было ошибок
*/

function initTicketInfo(ticket: TicketType | IVipTicket): void {
  const targetElement = document.querySelector(".ticket-info");

  if (!targetElement) {
    return;
  }

  const ticketDescription: string = ticket?.description;
  const ticketOperator: string = ticket?.tourOperator;
  let vipClientType: string = "";

  if ("vipStatus" in ticket) {
    vipClientType = ticket.vipStatus;
  }

  const ticketElemsArr: string[] = [
    ticketDescription,
    ticketOperator,
    vipClientType,
  ];

  let ticketElemTemplate: string = "";

  ticketElemsArr.forEach((el: string, i: number): void => {
    ticketElemTemplate += initTicketElementTemplate(el, i);
  });

  targetElement.innerHTML = ticketElemTemplate;
}

function initUserData(): Record<string, string> {
  const userInfo: NodeListOf<HTMLParagraphElement> =
    document.querySelectorAll(".user-info > p");

  const userInfoObj: Record<string, string> = {};

  userInfo.forEach((el: HTMLParagraphElement): void => {
    const inputDataName: string | null = el.getAttribute("data-name");

    if (inputDataName) {
      const inputElems: HTMLInputElement | null = el.querySelector("input");

      if (inputElems) {
        userInfoObj[inputDataName] = inputElems.value;
      }
    }
  });

  console.log("userInfoObj", userInfoObj);
  return userInfoObj;
}

function initPostData(data: unknown): void {
  initUserData();
  postTicketData(data).then((data) => {
    if (data.success) {
    }
  });
}

function registerConfirmButton(): void {
  const targetEl = document.getElementById("accept-order-button");
  if (targetEl) {
    targetEl.addEventListener("click", () => {
      initPostData(ticketPostInstance);
    });
  }
}
