class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; 2020 Brayan José Cruz Robles.`;
  }
}
customElements.define("mi-footer", MiFooter);
