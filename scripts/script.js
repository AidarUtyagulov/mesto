// const - создаем идентификаторы (нельзя перезаписать)
const popup = document.querySelector ('.popup'); // попап окно, querySelector принимает на вход селектор нужного элемента
const openPopupButton = document.querySelector ('.profile__button_edit'); // кнопка для показа окна
const closePopupButton = document.querySelector ('.popup__exit'); // кнопка закрытия окна
const getName = document.querySelector ('.profile__name'); // пункт с именем пользователя
const getJob = document.querySelector ('.profile__discription'); // пункт с описанием пользователя
const editForm = document.querySelector ('.popup__container'); // окно с формой для заполнения

// let - переменые, которые можно перезаписать
let nameInput = editForm.querySelector ('.popup__input_name'); // в блоке с .popup__container → editForm, объявляем переменную для редактирования имени
let jobInput = editForm.querySelector ('.popup__input_description');

// функция для показа попап окна
function openPopup () {
    popup.classList.add ('popup__opened'); // даем класс '.popup__opened'
}

// функция скрытия попап окна 
function closePopup ()  {
    popup.classList.remove ('popup__opened'); // убираем класс 
}

// обработчик отправки формы
function handleFormSubmit (evt) {
    evt.preventDefault(); // отменяет действие по умолчанию для события, в данном случаи отмена отправки формы
    getName.textContent = nameInput.value; // введеные пользователем данные заменяют исходное значение
    getJob.textContent = jobInput.value;
}
 
openPopupButton.addEventListener ('click', openPopup); // addEventListener добавляет действие, которое сработает на клик мышки
closePopupButton.addEventListener ('click', closePopup); // закрывает окно по клику мыши
editForm.addEventListener ('submit', handleFormSubmit); // отправляет форму