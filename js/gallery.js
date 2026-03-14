function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  const count = document.getElementById("piece-count");

  if (count) count.textContent = GALLERY.length;

  GALLERY.forEach((piece) => {
    const card = document.createElement("div");
    card.className = "gallery-card";

    const imgSrc = piece.file ? `assets/gallery/${piece.file}` : "";

    card.innerHTML = `
      <div class="gallery-frame">
        ${imgSrc
          ? `<img src="${imgSrc}" alt="${piece.title} by ${piece.artist}" onerror="this.parentElement.classList.add('no-img')">`
          : `<div class="no-img"></div>`
        }
      </div>
      <div class="gallery-label">
        <div class="gallery-title">${piece.title}</div>
        <div class="gallery-artist">
          ${piece.github
            ? `<a href="https://github.com/${piece.github}" target="_blank">${piece.artist}</a>`
            : piece.artist
          }
          ${piece.medium ? `<span class="gallery-medium">— ${piece.medium}</span>` : ""}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderGallery);
