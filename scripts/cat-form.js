import { createCard, getCard, updateCard } from './data-service.js';
import { setElementContent, getElement, addClass, removeClass } from './dom-helper.js';

function redirectToHomePage() {
  location.href = '/';
}

function prepareErrorHandling(hideForm) {
  return function handleError(error) {
    const errorContainer = getElement('#formError');
    removeClass(errorContainer, 'd-none');
    errorContainer.innerHTML = error;
    if (hideForm) {
      addClass(getElement('#cardForm'), 'd-none');
    }
  }
}

getElement('#cardForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;

  removeClass(form, 'was-validated');
  if (!form.checkValidity()) {
    addClass(form, 'was-validated');
  } else {
    const title = getElement('#cardTitle').value;
    const imageUrl = getElement('#cardImage').value;
    const description = getElement('#cardDescription').value;
    const card = {
      title,
      imageUrl,
      description
    };
    if (queryParams.cardId) {
      card.id = parseInt(getElement('#cardId').value, 10);
      updateCard(card)
          .then(redirectToHomePage)
          .catch(prepareErrorHandling(false));
    } else {
      createCard(card).then(redirectToHomePage);
    }
  }
});

const queryParams = location.search.substring(1).split('&').map(p => p.split('=')).reduce((acc, v) => { acc[v[0]] = v[1]; return acc; }, {});

if (queryParams.cardId) {
  getCard(queryParams.cardId).then(card => {
    getElement('#cardId').value = card.id;
    getElement('#cardTitle').value = card.title;
    getElement('#cardImage').value = card.imageUrl;
    getElement('#cardDescription').value = card.description;
  }).catch(prepareErrorHandling(true));;
}
const deleteButton = getElement('.btn-danger');
addClass(deleteButton, 'd-none');

setElementContent('#currentYear', new Date().getFullYear());
