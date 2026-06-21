import { getTours } from "@rest/tours";
import { ITours } from "../../models/tours";
import { getTourTemplate } from "../../templates/tours";
import { openModal } from "../modal/modalService";
import { initFooterTitle, initHeaderTitle } from "../general/general";

export let toursDataArray: ITours[] = [];

export function initApp(): void {
  initHeaderTitle("Туры", "h1");
  initFooterTitle("Туры по всему миру", "h2");

  const tourData: Promise<ITours[]> = getTours();

  tourData.then((data: ITours[]): void => {
    toursDataArray = data;
    initToursDivElements(data);
  });
}

function initToursDivElements(data: ITours[]): void {
  if (Array.isArray(data)) {
    const rootElement = document.querySelector(".main-app");

    if (!rootElement) {
      return;
    }

    const tourWrap: HTMLDivElement = document.createElement("div");

    tourWrap.classList.add("tour-wrap");

    initTourElemListener(tourWrap);

    let rootElementData: string = "";

    data.forEach((el: ITours, i: number): void => {
      rootElementData += getTourTemplate(el, i);
    });

    tourWrap.innerHTML = rootElementData;
    rootElement.appendChild(tourWrap);
  }
}

function initTourElemListener(tourWrap: HTMLDivElement): void {
  tourWrap.addEventListener("click", (ev: MouseEvent): void => {
    const targetItem = ev.target as HTMLElement;
    const parentItem = targetItem.parentNode as HTMLElement | null;

    let realTarget: HTMLElement | null = null;

    if (targetItem.hasAttribute("data-tour-item-index")) {
      realTarget = targetItem;
    } else if (parentItem && parentItem.hasAttribute("data-tour-item-index")) {
      realTarget = parentItem;
    }

    if (realTarget) {
      const dataIndex = realTarget.getAttribute("data-tour-item-index");

      openModal("order", Number(dataIndex));
    }
  });
}
