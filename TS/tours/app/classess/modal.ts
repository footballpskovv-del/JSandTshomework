class Modal {
    private readonly id: string;
    private container: HTMLDivElement;
    public static modals: Modal[] = [];

    constructor(id: string = null) {
        Modal.modals.push(this);
        this.id = id || String(Modal.modals.length);
    }

    public open(template: string): void {
        this.container = document.createElement('div');
        this.container.innerHTML = template;
        this.container.id = this.id;
        this.container.setAttribute('modal-id', this.id);
        this.container.classList.add('modal-element');
        const closeBtn: Element = this.container.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener("click", (event: Event) => {
                event.stopPropagation();
                this.remove();
            })
        }
        document.body.appendChild(this.container);

        const modalLock: Element = document.querySelector('.modal-block');
        if(modalLock){
            modalLock.classList.add('show');
        }
    };

    public remove(): void {
        this.container.parentNode.removeChild(this.container);
        Modal.modals = Modal.modals.filter((e: Modal) => e === this);
        const modalLock: Element = document.querySelector('.modal-block');
        if(modalLock){
            modalLock.classList.remove('show');
        }
    };

    public static removeById(id: string): void {
        let element: Modal = Modal.modals.find((e: Modal) => e.id === id);
        if (element) {
            element.remove();
            Modal.modals = Modal.modals.filter((e: Modal) => e.id === id);
            return;
        }
        Modal.modals[Modal.modals.length - 1]?.remove();
    }

    public static removeAll(): void {
        Modal.modals.forEach((e: Modal) => e.remove());
    }
}

export {
    Modal,
}
