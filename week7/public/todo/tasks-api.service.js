const TASKS_API = `${BASE_API_URL}/tasks/createTask`; // http://localhost:3000/api/tasks/createTask
const GET_ALL_TASKS_API = `${BASE_API_URL}/tasks/getAllTask`; // http://localhost:3000/api/tasks/getAllTask
const DELETE_TASKS_API = `${BASE_API_URL}/tasks/deleteTask`; // http://localhost:3000/api/tasks/deleteTask
const UPDATE_TASKS_API = `${BASE_API_URL}/tasks/updateTask`; // http://localhost:3000/api/tasks/updateTask

class TasksService {

  getAllTasks = (userId) => _get(`${GET_ALL_TASKS_API}/${userId}`, OPTIONS_WITH_AUTH);

  getTasks = () => _get(TASKS_API, OPTIONS_WITH_AUTH);

  addTask = (formData) => _post(TASKS_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

  updateTask = (taskId, formData) => _put(`${UPDATE_TASKS_API}/tasks/${taskId}`, formData, DEFAULT_OPTIONS_WITH_AUTH);

  deleteTask = (userId, taskId) => _delete(`${DELETE_TASKS_API}/${userId}/${taskId}`, OPTIONS_WITH_AUTH);

  async updateTask(task, userId) {
    try {
      // Implement code to update the task on the server using AJAX or fetch
      // Example:
      await fetch(`/api/tasks/${task.task_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });

      // Optionally, you can return the updated task from the server
      return task;
    } catch (error) {
      throw new Error('Failed to update task');
    }
  }
}