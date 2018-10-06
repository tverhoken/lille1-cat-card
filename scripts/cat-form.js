import { createCard } from './data-service.js';
import { setElementContent, getElement, addClass, removeClass } from './dom-helper.js';

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

    createCard(card).then(() => {
      location.href = '/';
    });
  }
});

const deleteButton = getElement('.btn-danger');
addClass(deleteButton, 'd-none');

setElementContent('#currentYear', new Date().getFullYear());
