export default class LoadMoreBtn {
    constructor({selector, isHidden = false}) {
        this.button = this.getButton(selector);

        isHidden && this.hide();
    }

    getButton(selector) {
        return document.querySelector(selector);
    }

    enable() {
        this.button.disabled = false;
        this.button.textContent = 'Load more';
    }

    disable() {
        this.button.disabled = true;
        this.button.textContent = 'Loading...';
    }

    hide() {
        this.button.classList.add('hidden');
    }

    show() {
        this.button.classList.remove('hidden');
    }
}