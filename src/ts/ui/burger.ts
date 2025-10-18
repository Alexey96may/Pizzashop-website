export class Burger {
    #burgerButton = document.getElementById("burger");
    #headerNav = document.getElementById("nav");
    #body = document.querySelector("body");
    #isMenuOpen = false;

    constructor() {
        this.#burgerButton?.addEventListener("click", (event) => {
            event.stopPropagation();
            this.classesToggle();
            this.toggleMenu();
        });

        this.#body?.addEventListener("click", (event) => {
            event.stopPropagation();
            if (
                (event.target as HTMLElement).closest("header") &&
                this.#isMenuOpen &&
                (event.target as HTMLElement).tagName?.toLowerCase() === "a"
            ) {
                this.toggleMenu();
                this.classesToggle();
            }
        });
    }

    classesToggle(): void {
        this.#burgerButton?.classList.toggle("burger--cancel");
        this.#headerNav?.classList.toggle("nav--appear");
        this.#body?.classList.toggle("body__fixed");
    }

    toggleMenu(): void {
        if (this.#isMenuOpen) {
            this.#isMenuOpen = false;
        } else {
            this.#isMenuOpen = true;
        }
    }
}
