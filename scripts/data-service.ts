export interface Card {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}

const initialCards: Card[] = [
  {
    id: 1,
    title: 'Random cat card',
    imageUrl: 'https://cataas.com/cat?width=250&height=200',
    description: 'That card shows a random cat image.'
  },
  {
    id: 2,
    title: 'Random cat card',
    imageUrl: 'https://cataas.com/cat/says/Hello?width=250&height=200',
    description: 'That card shows a random cat image with a text !'
  }
];

function initData() {
  const cards: Card[] | null = JSON.parse(sessionStorage.getItem('cards'));
  if(!cards) {
    sessionStorage.setItem('cards', JSON.stringify(initialCards));
  }
}

export function getAllCards(): Promise<Card[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cards: Card[] | null = JSON.parse(sessionStorage.getItem('cards'));
      if(cards && cards.length) {
        resolve(cards);
      } else {
        reject('No cards found !');
      }
    }, 300);
  });
}

export function getCard(cardId): Promise<Card> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cards: Card[] | null = JSON.parse(sessionStorage.getItem('cards'));
      if(cards && cards.length) {
        const card = cards.find(c => c.id == cardId);
        if (card) {
          resolve(card);
        } else {
          reject(`Card with id <${cardId}> was not found.`);
        }
      } else {
        reject('No cards found !');
      }
    }, 300);
  });
}

export function createCard(card): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cards: Card[] | null = JSON.parse(sessionStorage.getItem('cards'));
      if(cards && cards.length) {
        const maxId = Math.max(...cards.map(c => c.id));
        cards.push({ id: maxId + 1, ...card });
        sessionStorage.setItem('cards', JSON.stringify(cards));
        resolve();
      } else {
        reject('No cards found !');
      }
    }, 300);
  });
}

export function updateCard(card): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cards: Card[] | null = JSON.parse(sessionStorage.getItem('cards'));
      if(cards && cards.length) {
        const idxToUpdate = cards.findIndex(c => c.id == card.id)
        if (idxToUpdate >= 0) {
          cards[idxToUpdate] = card;
          sessionStorage.setItem('cards', JSON.stringify(cards));
          resolve();
        } else {
          reject(`Impossible to update card with id <${card.id}> because it doesn't exists.`);
        }
      } else {
        reject('No cards found !');
      }
    }, 300);
  });
}

export function deleteCard(cardId): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cards: Card[] | null = JSON.parse(sessionStorage.getItem('cards'));
      if(cards && cards.length) {
        const idxToDelete = cards.findIndex(c => c.id == cardId);
        if (idxToDelete >= 0) {
          cards.splice(idxToDelete, 1);
          sessionStorage.setItem('cards', JSON.stringify(cards));
          resolve();
        } else {
          reject(`Impossible to delete card with id <${cardId}> because it doesn't exists.`);
        }
      } else {
        reject('No cards found !');
      }
    });
  });
}

initData();