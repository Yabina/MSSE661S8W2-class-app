/**
 * html structure
 *
 * @example
 * <ul class="tasks-list">
 *  <li class="task-item">
 *    <div class="task-item-block">
 *      <span class="task-checkbox"><input type="checkbox"></span>
 *      <span class="task-name">Task name</span>
 *      <span class="task-status">pending</span>
 *      <span class="task-date">date create</span>
 *    </div>
 *  </li>
 * </ul>
 */
// (async () => {
//     const tasks = await getTasks();
//     console.log(tasks);
  
//     if (tasks.length) {
//       const div = document.getElementById('tasks');
//       const loadingDiv = div.childNodes[1];
  
//       const ul = document.createElement('ul');
  
//       // replace 'loading...' with list
//       div.replaceChild(ul, loadingDiv); // <- order is important here!
  
//       // create the list
//       tasks.map((task) => {
//         // building blocks
//         const li = document.createElement('li');
//         li.className = 'task-item';
//         const block = document.createElement('div');
//         block.className = 'task-item-block';
  
//         //   content
//         const checkboxSpan = document.createElement('span');
//         const checkbox = document.createElement('input');
//         checkbox.setAttribute('type', 'checkbox');
//         checkboxSpan.className = 'task-checkbox';
//         checkboxSpan.appendChild(checkbox);
  
//         const nameSpan = document.createElement('span');
//         nameSpan.className = 'task-name';
//         nameSpan.innerText = task.name;
  
//         const statusSpan = document.createElement('span');
//         statusSpan.className = 'task-status';
//         statusSpan.innerText = task.status;
  
//         const dateSpan = document.createElement('span');
//         dateSpan.className = 'task-date';
//         dateSpan.innerText = task.created_date;
  
//         // add list item
//         block.appendChild(checkboxSpan);
//         block.appendChild(nameSpan);
//         block.appendChild(statusSpan);
//         block.appendChild(dateSpan);
  
//         li.appendChild(block);
//         ul.appendChild(li);
//       });
//     }
//   })();
// This is an IIFE (Immediately Invoked Function Expression).
// What it does is in the name.
// (async () => {
//     const checklist = await getChecklist();
//     console.log(checklist);
  
//     if (checklist.length) {
//       const div = document.getElementById('checklist');
//       const loadingDiv = div.childNodes[1];
  
//       const ul = document.createElement('ul');
  
//       // replace 'loading...' with list
//       div.replaceChild(ul, loadingDiv); // <- order is important here!
  
//       // create the list
//       checklist.map((task) => {
//         // building blocks
//         const li = document.createElement('li');
//         li.className = 'checklist-item';
//         const block = document.createElement('div');
//         block.className = 'checklist-item-block';
  
//        // content
//        const radioSpan = document.createElement('span');
//        const radio = document.createElement('input');
//        radio.setAttribute('type', 'radio');
//        radio.setAttribute('name', 'checklist-item'); // Same name for all radio buttons in a group
//        radioSpan.className = 'checklist-checkbox'; // Keeping the same class for consistency
//        radioSpan.appendChild(radio);

//        const nameSpan = document.createElement('span');
//        nameSpan.className = 'checklist-name';
//        nameSpan.innerText = item.name;

//        const typeSpan = document.createElement('span');
//        typeSpan.className = 'checklist-type';
//        typeSpan.innerText = item.type;

//        const dateSpan = document.createElement('span');
//        dateSpan.className = 'checklist-date';
//        dateSpan.innerText = item.created_date;

//        <i class="bi bi-trash-fill"></i>
//        // add list item
//        block.appendChild(radioSpan);
//        block.appendChild(nameSpan);
//        block.appendChild(typeSpan);
//        block.appendChild(dateSpan);

//        li.appendChild(block);
//        ul.appendChild(li);
//    });
// }
// })();

(async () => {
    const tasklist = await getTasklist();
    console.log(tasklist);

if (tasklist.length) {
  const div = document.getElementById('tasklist');
  const loadingDiv = div.childNodes[1];
   
// Replace 'loading...' with the table
div.replaceChild(table, loadingDiv);

  tasklist.map((task) => {
  const table = document.createElement('table'); // Create table element
  table.className = 'task-item-block';

  // Create table header row
  const headerRow = document.createElement('tr');
  const headers = ['Name', 'Assigned_TO', 'Due_Date', 'Status', 'Actions']; // Table column headers
  headers.forEach((headerText) => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Create table body rows
  tasklist.forEach((task) => {
      const tr = document.createElement('tr');

      // Create table cells for item, type, and created date
      const nameCell = document.createElement('td');
      nameCell.className = 'task-name';
      nameCell.textContent = task.name;
      tr.appendChild(nameCell);

      const assignedToCell = document.createElement('td');
      assignedToCell.className = 'task-assignedTo';
      assignedToCell.textContent = task.assigned_to;
      tr.appendChild(assignedToCell);


      const dateCell = document.createElement('td');
      dateCell.className = 'task-date';
      dateCell.textContent = task.due_date;
      tr.appendChild(dateCell);

      const statusCell = document.createElement('td');
      statusCell.className = 'task-status';
      statusCell.textContent = task.status;
      tr.appendChild(statusCell);

      // Create table cell for actions (trash icon)
      const actionsCell = document.createElement('td');
      const trashIcon = document.createElement('i');
      trashIcon.className = 'fas fa-trash'; // Font Awesome trash icon class
      trashIcon.addEventListener('click', () => {
          // Add code here to handle the click event for the trash icon
          // For example, delete the corresponding item from the checklist
          console.log('Trash icon clicked for item:', item.name);
      });
      actionsCell.appendChild(trashIcon);
      tr.appendChild(actionsCell);

      table.appendChild(tr);
  });

  
}

)};
 }) ();