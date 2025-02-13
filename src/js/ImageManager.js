import Gallery from "./Gallery.js";

export default class ImageManager {
  constructor() {
    this.form = document.getElementById("imageForm");
    this.titleInput = document.getElementById("imageTitle");
    this.urlInput = document.getElementById("imageUrl");
    this.urlError = document.getElementById("urlError");
    this.gallery = new Gallery();

    this.initializeEvents();
  }

  initializeEvents() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  async handleSubmit(e) {
    e.preventDefault();
    const title = this.titleInput.value.trim();
    const url = this.urlInput.value.trim();

    if (!title || !url) return;

    try {
      await this.validateImage(url);
      this.gallery.addImage(title, url);
      this.clearForm();
    } catch (error) {
      this.showError();
    }
  }

  validateImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject();
      img.src = url;
    });
  }

  showError() {
    this.urlError.style.display = "block";
    setTimeout(() => {
      this.urlError.style.display = "none";
    }, 3000);
  }

  clearForm() {
    this.titleInput.value = "";
    this.urlInput.value = "";
  }
}
