import { getAllCards } from './data-service.js';
import { setElementContent } from './dom-helper.js';

function processCards(cards) {
  setElementContent('.card-group', fromCardsToHTML(cards));
}

function fromCardsToHTML(cards) {
  return cards.map(mapCardToHTML).join('');
}

function mapCardToHTML(card) {
  return `
            <div class="flipper mb-3" ontouchstart="this.classList.toggle('hover');">
              <div class="front card text-center shadow-sm">
                <img class="card-img-top" src="${card.imageUrl}" alt="Cat image" width="250" height="200"/>
                <div class="card-body">
                  <h5 class="card-title">${card.title}</h5>
                </div>
              </div>
              <div class="back card text-center shadow-sm">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">${card.title}</h6>
                  <p class="card-text">${card.description}</p>
                </div>
                <div class="card-footer">
                  <a href="./cat-form.html?cardId=${card.id}" class="btn btn-primary card-link">Edit that cat</a>
                </div>
              </div>
            </div>`;
}

function processCardsError(error) {
  setElementContent('.card-group', `<h3 class="text-center text-danger">${error}</h3>`);
}
getAllCards().then(processCards).catch(processCardsError);
setElementContent('#currentYear', new Date().getFullYear());
