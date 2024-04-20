const TASKLIST_API = `${BASE_API_URL}/tasklist`; // http://localhost:4000/api/tasklist

const getTasklist = () => _get(TASKLIST_API);

// const addTasklist = (formData) =>
//   _post(TASKLIST_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

//   const updateTasklist = (formData) =>
//   _put(TASKLIST_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

// const deleteTasklist = (tasklistId) =>
//   _delete(`${TASKLIST_API}/${tasklistId}`, OPTIONS_WITH_AUTH);