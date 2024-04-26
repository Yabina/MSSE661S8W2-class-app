/**
 * AJAX add new tasks to task list on save.
 */

const doAddTask = async (e) => {
  e.preventDefault();

  // Get task input elements
  const taskNameInput = document.getElementById('taskName');
  const taskDescriptionInput = document.getElementById('taskDescription');
  const taskAssignedToInput = document.getElementById('taskAssignedTo');
  const taskDueDateInput = document.getElementById('taskDueDate');

  // Extract values from input elements
  const task_name = taskNameInput.value;
  const task_description = taskDescriptionInput.value;
  const task_assigned_to = taskAssignedToInput.value;
  const task_due_date = taskDueDateInput.value;

  // Get task status from select element
  const statusSelect = document.getElementById('formSelectStatus');
  const selectedIndex = statusSelect.selectedIndex;
  const status = statusSelect.options[selectedIndex].text;

  // Validate task name
  if (!task_name) {
    alert('Please enter a task name.');
    return;
  }

  try {
      // Add task
      const res = await addTask({ task_name, task_description, task_assigned_to, task_due_date, status });

      // Check if task was added successfully
      if (res !== null) {
          // Create new task object with additional properties
          const now = new Date().toISOString();
          const newTask = { 
              task_name, 
              task_description, 
              task_assigned_to, 
              task_due_date, 
              status, 
              created_date: now
          };

          // Get tasks list container
          const listGroup = document.getElementById('tasks-list');

          // If list container doesn't exist, create it
          if (!listGroup) {
              const tasksDiv = inst.createTaskListParent();
              inst.buildTasksList(tasksDiv, [newTask]);
          } else {
              // If list container exists, add new task to it
              inst.buildTasksList(listGroup, [newTask]);
          }

          // Generate tasks
          inst.generateTasks();
      }
  } catch (error) {
      console.error('Error adding task:', error);
  }

  // Clear task input fields
  taskNameInput.value = '';
  taskDescriptionInput.value = '';
  taskAssignedToInput.value = '';
  taskDueDateInput.value = '';
};




// const doAddTask = async (e) => {
//     e.preventDefault();
  
//     const taskInput = document.getElementById('formInputTaskName');
//     const task_name = taskInput.value;
//     const statusSelect = document.getElementById('formSelectStatus');
//     const options = statusSelect.options;
//     const selectedIndex = statusSelect.selectedIndex;
//     const status = options[selectedIndex].text;
  
//     if (!task_name) {
//       alert('Please enter a task name.');
//       return;
//     }
  
//     const res = await addTask({ task_name, status });
  
//     if (res !== null) {
//       const now = new Date().toISOString();
//       const newTask = [{ task_name, status, created_date: now}];
//      const listGroup = document.getElementById('tasks-list');
//      if (!listGroup) {
//       const tasksDiv = inst.createTaskListParent();
//       inst.buildTasksList(tasksDiv, newTask);
//      } else {
//       inst.buildTasksList(listGroup, newTask);
//      }
//       inst.generateTasks();
//     }
//     taskInput.value = '';
//   };








  //const res = await addTask({ task_name, status });
  
//   if (res !== null) {
//     const now = new Date().toISOString();
//     const newTask = [{ task_name, status, created_date: now}];
//     const div = document.getElementById('tasks');
//     const childDiv = div.childNodes[1];
//     if (!childDiv) {
//       const mount = inst.swapLoadingDiv();
//       inst.buildTaskListRowItem(mount, newTask);
//     } else {
//       inst.buildTaskListRowItem(childDiv, newTask);
//     }
//   }
//   taskInput.value = '';
// };
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