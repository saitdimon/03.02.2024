const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');

myButton.addEventListener('click', () => {
    // Создать элемент списка
    const newItem = document.createElement('li');

    // Добавить элемент в список
    // parent.appendChild(item) - добавить элемент item в конец элемента parent
    list.appendChild(newItem);

    // item.classList.add(class) добавить элементу item класс class
    newItem.classList.add('item');

    // Записать содержимое поля ввода в элемент списка.
    newItem.textContent = nameInput.value;

    // Очистить поле ввода
    nameInput.value = '';

    // Создать кнопку удаления добавленного элемента списка
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'

    // Добавить кнопку удаления в элемент списка
    newItem.appendChild(deleteBtn);

    // Удаление элемента списка
    // parent.removeChild(item) - удалить элемент item из элемента parent
    deleteBtn.addEventListener('click', () => {
        list.removeChild(newItem);
    })

    newItem.addEventListener('click', () => {
        newItem.classList.add('item2')
        delBtn.classList.add('btn2')
    })

    newItem.addEventListener('click', () => {
        newItem.classList.add('item3')
        delBtn.classList.add('btn3')
    })
});