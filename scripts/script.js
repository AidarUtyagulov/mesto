// const - создаем идентификаторы (нельзя перезаписать)
const popup = document.querySelector ('.popup'); // попап окно, querySelector принимает на вход селектор нужного элемента
const openPopupButton = document.querySelector ('.profile__button_edit'); // кнопка для показа окна
const closePopupButton = document.querySelector ('.popup__exit'); // кнопка закрытия окна
const getName = document.querySelector ('.profile__name'); // пункт с именем пользователя
const getDiscription = document.querySelector ('.profile__discription'); // пункт с описанием пользователя
const editForm = document.querySelector ('.popup__container'); // окно с формой для заполнения

// let - переменые, которые можно перезаписать
let nameInput = editForm.querySelector ('.popup__input_name'); // в блоке с .popup__container → editForm, объявляем переменную для редактирования имени
let discriptionInput = editForm.querySelector ('.popup__input_description');

// функция для показа попап окна
function openPopup () {
    popup.classList.add ('popup__opened'); // даем класс '.popup__opened'
}

// функция скрытия попап окна 
function closePopup ()  {
    popup.classList.remove ('popup__opened'); // убираем класс 
}

function formSubmitHandler (evt) {
    evt.preventDefault(); // отменяет действие по умолчанию для события, в данном случаи отмена отправки формы (перезагрузка страницы)
    getName.textContent = nameInput.value; // введеные пользователем данные отправляются в браузер
    getDiscription.textContent = discriptionInput.value;
}
 
openPopupButton.addEventListener ('click', openPopup); // addEventListener добавляет действие, которое сработает на клик мышки
closePopupButton.addEventListener ('click', closePopup); // закрывает окно по клику мыши
editForm.addEventListener ('submit', formSubmitHandler); // отправляет форму