// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardTemplate = document.getElementById('card-template').content.querySelector('.card');
const placesList = document.querySelector('.places__list');

function deleteCard(cardElement) {
  cardElement.remove();
};

function addCardContainer(containerElement, cardElement) {
  containerElement.append(cardElement);
}

function createCard(dataObj, deleteCallback) {
  const cardElement = cardTemplate.cloneNode(true); // Клонируем шаблон карточки
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardRemuveButton = cardElement.querySelector('.card__delete-button');
  
  cardImage.src = dataObj.link;
  cardImage.alt = dataObj.name;
  cardTitle.textContent = dataObj.name;

  cardRemuveButton.addEventListener('click', () => {
    deleteCallback(cardElement);
  })
 return cardElement; 
};

initialCards.forEach((cardObj) => {
  const cardNode = createCard(cardObj, deleteCard);
  console.dir(cardNode);
  addCardContainer(placesList, cardNode);
});

