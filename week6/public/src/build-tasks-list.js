/**
 * @class TaskList
 *
 * Creates a list of tasks and updates a list
 */
// document.getElementById('task-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Get form inputs
//   const taskName = document.getElementById('taskName').value;
//   const taskDescription = document.getElementById('taskDescription').value;
//   const taskCreatedDate = document.getElementById('taskCreatedDate').value;
//   const taskDueDate = document.getElementById('taskDueDate').value;
//   const taskAssignedTo = document.getElementById('taskAssignedTo').value;
//   const taskStatus = document.getElementById('formSelectStatus').value;

//   // Create a new row for the table
//   const newRow = document.createElement('tr');
//   newRow.innerHTML = `
//     <td>${taskName}</td>
//     <td>${taskDescription}</td>
//     <td>${taskCreatedDate}</td>
//     <td>${taskDueDate}</td>
//     <td>${taskAssignedTo}</td>
//     <td>${taskStatus}</td>
//   `;

//   // Append the new row to the table body
//   document.getElementById('tasks').appendChild(newRow);

//   // Reset the form
//   document.getElementById('task-form').reset();
// });

// Create container div
const containerDiv = document.createElement('div');
containerDiv.classList.add('container', 'mt-5');

// Create heading
const heading = document.createElement('h2');
heading.textContent = 'Task Manager';

// Create form
const form = document.createElement('form');
form.id = 'task-form';

// Create form group for task name
const taskNameFormGroup = document.createElement('div');
taskNameFormGroup.classList.add('form-group');
const taskNameLabel = document.createElement('label');
taskNameLabel.textContent = 'Task Name:';
const taskNameInput = document.createElement('input');
taskNameInput.type = 'text';
taskNameInput.classList.add('form-control');
taskNameInput.id = 'taskName';
taskNameInput.required = true;
taskNameFormGroup.appendChild(taskNameLabel);
taskNameFormGroup.appendChild(taskNameInput);

// Create form group for task description
const taskDescriptionFormGroup = document.createElement('div');
taskDescriptionFormGroup.classList.add('form-group');
const taskDescriptionLabel = document.createElement('label');
taskDescriptionLabel.textContent = 'Task Description:';
const taskDescriptionTextarea = document.createElement('textarea');
taskDescriptionTextarea.classList.add('form-control');
taskDescriptionTextarea.id = 'taskDescription';
taskDescriptionTextarea.rows = 3;
taskDescriptionFormGroup.appendChild(taskDescriptionLabel);
taskDescriptionFormGroup.appendChild(taskDescriptionTextarea);

// Create form group for task details
const taskDetailsFormGroup = document.createElement('div');
taskDetailsFormGroup.classList.add('form-group');
const taskCreatedDateLabel = document.createElement('label');
taskCreatedDateLabel.textContent = 'Task Created Date:';
const taskCreatedDateInput = document.createElement('input');
taskCreatedDateInput.type = 'date';
taskCreatedDateInput.id = 'taskCreatedDate';
taskCreatedDateInput.required = true;
const taskDueDateLabel = document.createElement('label');
taskDueDateLabel.textContent = 'Task Due Date:';
const taskDueDateInput = document.createElement('input');
taskDueDateInput.type = 'date';
taskDueDateInput.id = 'taskDueDate';
taskDueDateInput.required = true;
const taskAssignedToLabel = document.createElement('label');
taskAssignedToLabel.textContent = 'Task Assigned To:';
const taskAssignedToInput = document.createElement('input');
taskAssignedToInput.type = 'text';
taskAssignedToInput.id = 'taskAssignedTo';
taskAssignedToInput.required = true;
taskDetailsFormGroup.appendChild(taskCreatedDateLabel);
taskDetailsFormGroup.appendChild(taskCreatedDateInput);
taskDetailsFormGroup.appendChild(taskDueDateLabel);
taskDetailsFormGroup.appendChild(taskDueDateInput);
taskDetailsFormGroup.appendChild(taskAssignedToLabel);
taskDetailsFormGroup.appendChild(taskAssignedToInput);

// Create form group for task status
const taskStatusFormGroup = document.createElement('div');
taskStatusFormGroup.classList.add('form-group');
const taskStatusLabel = document.createElement('label');
taskStatusLabel.classList.add('sr-only');
taskStatusLabel.textContent = 'Status';
const taskStatusSelect = document.createElement('select');
taskStatusSelect.id = 'formSelectStatus';
taskStatusSelect.classList.add('custom-select', 'mr-sm-2');
taskStatusSelect.name = 'task-name';
const statusOptions = ['Not Started', 'Pending', 'Completed'];
statusOptions.forEach(status => {
    const option = document.createElement('option');
    option.value = status;
    option.textContent = status;
    if (status === 'Not Started') {
        option.selected = true;
    }
    taskStatusSelect.appendChild(option);
});
taskStatusFormGroup.appendChild(taskStatusLabel);
taskStatusFormGroup.appendChild(taskStatusSelect);

// Create submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.classList.add('btn', 'btn-primary');
submitButton.textContent = 'Add Task';

// Append elements to form
form.appendChild(taskNameFormGroup);
form.appendChild(taskDescriptionFormGroup);
form.appendChild(taskDetailsFormGroup);
form.appendChild(taskStatusFormGroup);
form.appendChild(submitButton);

// Create table
const table = document.createElement('table');
table.classList.add('table', 'mt-4');

// Create table header
const tableHeaderRow = document.createElement('tr');
const tableHeaders = ['Task Name', 'Task Description', 'Task Created Date', 'Task Due Date', 'Task Assigned To', 'Task Status'];
tableHeaders.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    tableHeaderRow.appendChild(header);
});
const tableHeader = document.createElement('thead');
tableHeader.appendChild(tableHeaderRow);

// Append table header to table
table.appendChild(tableHeader);

// Append elements to container div
containerDiv.appendChild(heading);
containerDiv.appendChild(form);
containerDiv.appendChild(table);

// Append container div to body
document.body.appendChild(containerDiv);