export default class Gallery {
  constructor() {
    this.container = document.getElementById("gallery");
    this.container.addEventListener("click", (e) => this.handleDelete(e));
  }

  addImage(title, url) {
    const card = document.createElement("div");
    card.className = "image-card";
    card.innerHTML = `
              <img src="${url}" alt="${title}">
              <button class="delete-btn">×</button>
          `;
    this.container.appendChild(card);
  }

  handleDelete(e) {
    if (e.target.classList.contains("delete-btn")) {
      e.target.parentElement.remove();
    }
  }
}
