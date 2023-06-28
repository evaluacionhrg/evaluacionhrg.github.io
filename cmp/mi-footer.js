class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Hector Romero Gonzalez.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
