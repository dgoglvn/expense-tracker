window.addEventListener('load', () => {
    const form = document.getElementById('new-item-form');
    const form_name = document.getElementById('new-item-name');
    const form_date = document.getElementById('new-item-date');
    const form_amount = document.getElementById('new-item-amount');
    const list_el = document.getElementById('expenses');

    let total;

    const tr_empty_el = document.createElement('tr');
    tr_empty_el.classList.add('empty');
    tr_empty_el.style.display = 'table-row';

    const td_empty_el = document.createElement('td');
    td_empty_el.classList.add('td_empty_el');
    td_empty_el.innerHTML = 'You have not added any expenses yet!';
    td_empty_el.setAttribute('colspan', 4);

    tr_empty_el.appendChild(td_empty_el);
    list_el.appendChild(tr_empty_el);

    console.log(list_el);
    console.log(tr_empty_el.style.display);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (tr_empty_el.style.display != 'none') {
            tr_empty_el.style.display = 'none';
        }

        const expense_name = form_name.value;
        const expense_date = form_date.value;
        const expense_amount = `$${form_amount.value}`;

        const tr_expense_el = document.createElement('tr');
        tr_expense_el.classList.add('expense');

        const td_name_el = document.createElement('td');
        td_name_el.innerHTML = expense_name;
        
        const td_date_el = document.createElement('td');
        td_date_el.innerHTML = expense_date;

        const td_amount_el = document.createElement('td');
        td_amount_el.innerHTML = expense_amount;

        const td_delete = document.createElement('td');
        td_delete.classList.add('td-delete');
        
        const td_delete_el = document.createElement('button');
        td_delete_el.innerHTML = 'X';
        td_delete_el.classList.add('expense-delete');
        td_delete.appendChild(td_delete_el);

        tr_expense_el.append(td_name_el);
        tr_expense_el.appendChild(td_date_el);
        tr_expense_el.appendChild(td_amount_el);
        tr_expense_el.appendChild(td_delete);
        list_el.appendChild(tr_expense_el);

        form_name.value = '';
        form_date.value = '';
        form_amount.value = '';

        total = 
        console.log(total);

        td_delete_el.addEventListener('click', () => {
            list_el.removeChild(tr_expense_el);
            console.log(list_el.children.length)

            if (list_el.children.length === 1) {
                tr_empty_el.style.display = 'table-row';
            }
        })
    })
})
