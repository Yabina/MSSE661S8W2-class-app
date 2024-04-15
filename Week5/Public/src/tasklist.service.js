const TASKLIST_API = `${BASE_API_URL}/tasks`; // http://localhost:3000/api/tasks

const getTasklist = () => _get(TASKLIST_API);

const addTasklist = (formData) =>
  _post(TASKLIST_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

  const updateTasklist = (formData) =>
  _put(TASKLIST_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

const deleteTasklist = (tasklistId) =>
  _delete(`${TASKLIST_API}/${tasklistId}`, OPTIONS_WITH_AUTH);