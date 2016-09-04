

// Mandatory student data
var students = [
    {"name": "Hans", "email": "ha@mail.com", "phone": "84658746", "category": "Red", "groupname": "Los Gropos Maximus"},
    {"name": "Grete", "email": "gr@mail.com", "phone": "74894641", "category": "Yellow", "groupname": "Trunteklubben"},
    {"name": "Lise", "email": "li@mail.com", "phone": "89746518", "category": "Green", "groupname": "Trunteklubben"}


];

var tableBody = document.getElementById("studentTable");

var populateTable = function () {
    tableBody.innerHTML = "";
    for (var i = 0; i < students.length; i++) {

        //Inserting row
        var row = tableBody.insertRow(i);

        //Creating the delete button
        var delButton = document.createElement("button");
        delButton.className = "btn btn-danger";
        delButton.id = i + "delButton";
        delButton.onclick = function () {
            deleteRow(this.id);
        };

        var delButtonTxt = document.createTextNode("Delete");
        delButton.appendChild(delButtonTxt);

        row.insertCell(0).innerHTML = i;
        row.insertCell(1).innerHTML = students[i].name;
        row.insertCell(2).innerHTML = students[i].email;
        row.insertCell(3).innerHTML = students[i].phone;
        row.insertCell(4).innerHTML = students[i].category;
        row.insertCell(5).innerHTML = students[i].groupname;
        row.insertCell(6).appendChild(delButton);
    }


};
populateTable();

var studentSelect = document.getElementById("studentSelect");

var deleteSelectedRow = document.getElementById("buttonTestDeleteRow");

var deleteStudentId = document.getElementById("deleteid");

deleteSelectedRow.onclick = function () {

    if (deleteStudentId.value > -1) {
        students.splice(deleteStudentId.value, 1);
    }
    populateTable();
};

var deleteAllButton = document.getElementById("deleteAllButton");

deleteAllButton.onclick = function () {

    students.length = 0;
    populateTable();

};
var studentForm = document.getElementById("studentForm");
studentForm.onsubmit = function (event) {
    event.preventDefault();

    var student = {};
    student.name = studentForm.elements["fullname"].value;
    student.email = studentForm.elements["email"].value;
    student.phone = studentForm.elements["phone"].value;
    student.category = studentSelect.options[studentSelect.selectedIndex].text;
    student.groupname = studentForm.elements["groupname"].value;
    students.push(student);
    populateTable();
};

var deleteRow = function (id) {

    var del = id.substring(0, 1);
    students.splice(del, 1);
    populateTable();

};