// opening the menu when we click on the open icon
const selectEl = (classEl) => document.querySelector(classEl);
selectEl('.open').addEventListener('click', () => {
    selectEl('.nav-list').classList.add('active')
})

// closing the menu when we click on the close icon
selectEl('.close').addEventListener('click', () => {
    selectEl('.nav-list').classList.remove('active')
})