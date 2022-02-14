let count = 0;

document.getElementById('add-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('input-value').value;
    if (inputValue == '') {
        alert('Input a value');
    }
    else {
        const mainContainer = document.getElementById('content-container');
        const tableContainer = document.createElement('tr');
        tableContainer.innerHTML = `<th>${count}</th>
            <td>${inputValue}</td>
            <td><button class="btn btn-danger delete-btn">Delete</button>
            <button class="btn btn-success done-btn">Done</button></td>
        `
        mainContainer.appendChild(tableContainer);
        document.getElementById('input-value').value = '';

        const deleteBtn = document.getElementsByClassName('delete-btn');
        const doneBtn = document.getElementsByClassName('done-btn')

        for (const button of deleteBtn) {
            button.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.display = 'none';
            });
        }

        for (const button of doneBtn) {
            button.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.textDecoration = "line-through";
            });
        }
    }
})