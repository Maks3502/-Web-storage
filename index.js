// завдання 1
const tasksList = document.getElementById('tasksList');
const newTaskInput = document.getElementById('newTaskInput');
const addTaskButton = document.getElementById('addTaskButton');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  tasksList.innerHTML = '';

  tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.textContent = task.title;

    if (task.completed) {
      listItem.classList.add('completed');
    }

    listItem.addEventListener('click', () => toggleTaskStatus(task));

    tasksList.appendChild(listItem);
  });
}

function toggleTaskStatus(task) {
  task.completed = !task.completed;
  saveTasks();
  loadTasks();
}

function addTask() {
  const newTaskTitle = newTaskInput.value;
  if (newTaskTitle) {
    const newTask = { title: newTaskTitle, completed: false };
    tasks.push(newTask);
    saveTasks();
    loadTasks();
    newTaskInput.value = '';
  }
}

addTaskButton.addEventListener('click', addTask);

loadTasks();

// завдання 2 
const dataForm = document.getElementById('dataForm');
const dataInput = document.getElementById('dataInput');
const saveDataButton = document.getElementById('saveDataButton');

saveDataButton.addEventListener('click', saveData);

function saveData() {
  const data = dataInput.value;
  localStorage.setItem('savedData', data);
  alert('Data saved successfully!');
}


const savedData = localStorage.getItem('savedData');
if (savedData) {
  dataInput.value = savedData;
}

// завдання 3
const bookmarksList = document.getElementById('bookmarksList');
const newBookmarkTitleInput = document.getElementById('newBookmarkTitle');
const newBookmarkURLInput = document.getElementById('newBookmarkURL');
const addBookmarkButton = document.getElementById('addBookmarkButton');

let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

function saveBookmarks() {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function loadBookmarks() {
  bookmarksList.innerHTML = '';

  bookmarks.forEach((bookmark, index) => {
    const listItem = document.createElement('li');

    const link = document.createElement('a');
    link.href = bookmark.url;
    link.target = '_blank';
    link.textContent = bookmark.title;
    listItem.appendChild(link);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editBookmark(index));
    listItem.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteBookmark(index));
    listItem.appendChild(deleteButton);

    bookmarksList.appendChild(listItem);
  });
}

function addBookmark() {
  const newBookmarkTitle = newBookmarkTitleInput.value;
  const newBookmarkURL = newBookmarkURLInput.value;

  if (newBookmarkTitle && newBookmarkURL) {
    const newBookmark = { title: newBookmarkTitle, url: newBookmarkURL };
    bookmarks.push(newBookmark);
    saveBookmarks();
    loadBookmarks();
    newBookmarkTitleInput.value = '';
    newBookmarkURLInput.value = '';
  }
}

function editBookmark(index) {
  const updatedTitle = prompt('Enter updated title:', bookmarks[index].title);
  const updatedURL = prompt('Enter updated URL:', bookmarks[index].url);

  if (updatedTitle !== null && updatedURL !== null) {
    bookmarks[index].title = updatedTitle;
    bookmarks[index].url = updatedURL;
    saveBookmarks();
    loadBookmarks();
  }
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  saveBookmarks();
  loadBookmarks();
}

addBookmarkButton.addEventListener('click', addBookmark);

loadBookmarks();


    // завдання 4

    const contactsList = document.getElementById('contactsList');
    const newContactFirstNameInput = document.getElementById('newContactFirstName');
    const newContactLastNameInput = document.getElementById('newContactLastName');
    const newContactPhoneInput = document.getElementById('newContactPhone');
    const newContactEmailInput = document.getElementById('newContactEmail');
    const addContactButton = document.getElementById('addContactButton');

    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    function saveContacts() {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    function loadContacts() {
      contactsList.innerHTML = '';

      contacts.forEach((contact, index) => {
        const listItem = document.createElement('li');

        const strongElement = document.createElement('strong');
        strongElement.textContent = `${contact.firstName} ${contact.lastName}`;
        listItem.appendChild(strongElement);

        const phoneElement = document.createElement('p');
        phoneElement.textContent = `Phone: ${contact.phone}`;
        listItem.appendChild(phoneElement);

        const emailElement = document.createElement('p');
        emailElement.textContent = `Email: ${contact.email}`;
        listItem.appendChild(emailElement);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editContact(index));
        listItem.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteContact(index));
        listItem.appendChild(deleteButton);

        contactsList.appendChild(listItem);
      });
    }

    function addContact() {
      const newContactFirstName = newContactFirstNameInput.value;
      const newContactLastName = newContactLastNameInput.value;
      const newContactPhone = newContactPhoneInput.value;
      const newContactEmail = newContactEmailInput.value;

      if (newContactFirstName && newContactLastName && newContactPhone && newContactEmail) {
        const newContact = {
          firstName: newContactFirstName,
          lastName: newContactLastName,
          phone: newContactPhone,
          email: newContactEmail
        };

        contacts.push(newContact);
        saveContacts();
        loadContacts();
        clearContactInputs();
      }
    }

    function editContact(index) {
      const updatedFirstName = prompt('Enter updated First Name:', contacts[index].firstName);
      const updatedLastName = prompt('Enter updated Last Name:', contacts[index].lastName);
      const updatedPhone = prompt('Enter updated Phone:', contacts[index].phone);
      const updatedEmail = prompt('Enter updated Email:', contacts[index].email);

      if (updatedFirstName !== null && updatedLastName !== null && updatedPhone !== null && updatedEmail !== null) {
        contacts[index].firstName = updatedFirstName;
        contacts[index].lastName = updatedLastName;
        contacts[index].phone = updatedPhone;
        contacts[index].email = updatedEmail;
        saveContacts();
        loadContacts();
      }
    }

    function deleteContact(index) {
      contacts.splice(index, 1);
      saveContacts();
      loadContacts();
    }

    function clearContactInputs() {
      newContactFirstNameInput.value = '';
      newContactLastNameInput.value = '';
      newContactPhoneInput.value = '';
      newContactEmailInput.value = '';
    }

    addContactButton.addEventListener('click', addContact);

    loadContacts();