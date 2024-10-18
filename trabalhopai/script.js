const searchBar = document.getElementById('searchBar');
const items = document.querySelectorAll('#itemList a');

searchBar.addEventListener('keyup', (e) => {
    const searchText = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchText)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
