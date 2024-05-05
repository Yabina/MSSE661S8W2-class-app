const tasksService = new TasksService();
const todo = new ToDo(tasksService);

describe('Todo App', () => {
  it('should initialize some HTML', () => {
    spyOn(todo, 'init');
    todo.init();

    expect(todo.init).toHaveBeenCalled();
  });

  it('should add a task', async () => {
    const newTask = {
      task_id: 0,
      task_name: 'Third task',
      status: 'pending',
      created_date: '2020-04-14 22:50:32',
    };
    const addTaskServiceSpy = spyOn(tasksService, 'createTask');

    expect(todo.tasks.length).toBe(0);

    await todo.createTask(newTask);

    expect(addTaskServiceSpy).toHaveBeenCalled();
    expect(todo.tasks.length).toBe(1);
  });
  it('should update a task', async () => {
    const updateTask = {
      task_id: 1,
      task_name: 'task1',
      status: 'pending',
      created_date: '2020-04-14 22:50:32',
    };
    const updateTaskServiceSpy = spyOn(tasksService, 'updateTask');

    expect(todo.tasks.length).toBe(1);

    await todo.updateTask(updateTask);

    expect(updateTaskServiceSpy).toHaveBeenCalled();
    expect(todo.tasks.length).toBe(1);
  });

  it('should delete a task', async () => {
    const existingTask = {
      task_id: 0,
      task_name: 'Third task',
      status: 'pending',
      created_date: '2020-04-14 22:50:32',
    };
    const deleteTaskServiceSpy = spyOn(tasksService, 'deleteTask');

    expect(todo.tasks.length).toBe(1);

    await todo.deleteTask(existingTask.task_id);

    expect(deleteTaskServiceSpy).toHaveBeenCalled();
    expect(todo.tasks.length).toBe(0);
  });

  xit('should update an individual task', () => {
    // ..
  });
});