var username = document.getElementById('uname');
var age = document.getElementById('age');
var courses = document.querySelector('ul');
var table = document.querySelector('table');
var add = document.getElementById('add');
var deleteAll = document.getElementById('del_all');
var name_value;
var age_Value;
var course = "Html";

function isAlpha(x) {
    return ((x >= 'a') && (x <= 'z'))  ((x >= 'A') && (x <= 'Z'))  (x === ' ');
}


username.addEventListener('keydown', (ele) => {
    if (!isAlpha(ele.key)) {
        ele.preventDefault();
    }
})
username.addEventListener('blur', (ele) => {
    if (ele.target.value.length > 20 || ele.target.value.length === 0) {
        ele.target.style.backgroundColor = 'rgb(255, 131, 129)';
        add.disabled = true
    } else {
        ele.target.style.backgroundColor = '#fff'
        add.disabled = false
        name_value = ele.target.value
    }
})
age.addEventListener('keyup', (ele) => {
    let y = parseInt(ele.target.value);
    if (y < 18 && y > 24 && !ele.target.value) {
        ele.target.style.backgroundColor = 'rgb(255, 131, 129)';
        add.disabled = true;
    } else {
        ele.target.style.backgroundColor = '#fff'
        add.disabled = false;
        age_Value = ele.target.value;
    }
})
courses.addEventListener("mousemove", function (event) {
    event.target.style.opacity = "0.5"
})

courses.addEventListener("mouseout", function (event) {
    event.target.style.opacity = "1"
})


courses.addEventListener('click', (ele) => {
    course = ele.target.textContent;
    console.log(course);
})

var delete_button;
add.addEventListener('click', (ele) => {
    ele.preventDefault();
    var row = document.createElement('tr');

    var tdName = document.createElement('td');
    tdName.textContent = name_value;

    var tdAge = document.createElement('td');
    tdAge.textContent = age_Value;

    var tdCourse = document.createElement('td');
    tdCourse.textContent = course;

    var tdDel = document.createElement('td');
    delete_button = document.createElement('button');
    delete_button.textContent = "Delete";
    delete_button.setAttribute('onclick', 'deleteRow(this.parentElement)');
    tdDel.append(delete_button)

    table.tBodies[0].append(row);
    row.append(tdName);
    row.append(tdAge);
    row.append(tdCourse);
    row.append(tdDel);

    username.value = '';
    age.value = '';
})
function deleteRow(ele){
    ele.parentElement.remove()
}
del_all.addEventListener('click', () => {
    table.children.remove()
});