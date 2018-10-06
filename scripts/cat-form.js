import { getCard, createCard, updateCard, deleteCard } from './data-service.js';
import { setElementContent, getElement, addClass, removeClass } from './dom-helper.js';

function getQueryParams() {
  return location.search.substring(1).split('&').map(p => p.split('=')).reduce((acc, v) => { acc[v[0]] = v[1]; return acc; }, {});
}
function fillForm(card) {
  getElement('#cardId').value = card.id;
  getElement('#cardTitle').value = card.title;
  getElement('#cardImage').value = card.imageUrl;
  getElement('#cardDescription').value = card.description;
}

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
function newCard() {
  const title = getElement('#cardTitle').value;
  const imageUrl = getElement('#cardImage').value;
  const description = getElement('#cardDescription').value;
  return {
    title,
    imageUrl,
    description
  };
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const errorContainer = getElement('#formError');
  if (errorContainer.classList.contains('d-none')) {
    removeClass(errorContainer, 'd-none');
  }
  removeClass(form, 'was-validated');
  if (!form.checkValidity()) {
    addClass(form, 'was-validated');
  } else {
    const card = newCard();
    if (getQueryParams().cardId) {
      card.id = parseInt(getElement('#cardId').value, 10);
      updateCard(card)
        .then(redirectToHomePage)
        .catch(prepareErrorHandling(false));
    } else {
      createCard(card).then(redirectToHomePage);
    }
  }
}

getElement('#cardForm').addEventListener('submit', handleSubmit);

const deleteButton = getElement('.btn-danger');
addClass(deleteButton, 'd-none');
deleteButton.addEventListener('click', e => {
  e.preventDefault();
  deleteCard(getQueryParams().cardId)
    .then(redirectToHomePage)
    .catch(prepareErrorHandling(false));
});

if (getQueryParams().cardId) {
  removeClass(deleteButton, 'd-none');

  getCard(getQueryParams().cardId)
    .then(fillForm)
    .catch(prepareErrorHandling(true));
}
setElementContent('#currentYear', new Date().getFullYear());
