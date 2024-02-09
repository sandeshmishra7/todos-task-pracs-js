let submitBtn = document.querySelector('button');
let activity = document.querySelector('#activity');
let date = document.querySelector('#date');

let count = 0;
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let activityValue = activity.value;
    let dateValue = date.value;

    let tableBody = document.getElementById('tableBody');

    count++;

    let str = `<tr>
    <td>${count}</td>
    <td>${activityValue}</td>
    <td>${dateValue}</td>
    </tr>`;

    tableBody.innerHTML += str;
    activity.value = '';
    date.value = '';
});
