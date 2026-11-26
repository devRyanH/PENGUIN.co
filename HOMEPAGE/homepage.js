document.querySelectorAll('.card').forEach(card => {
    card.innerHTML = `<div class="incard">${card.innerHTML}</div>`;
});