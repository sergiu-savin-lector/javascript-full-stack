const URL = 'https://650d6e2aa8b42265ec2c352c.mockapi.io/todos';

const saveTask = (task) => { 
  console.log('POST');

  const options = {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(URL, options);
  // return axios.post(URL, task);
};

const loadTasks = () => {
  console.log('GET');

  return fetch(URL).then(res => res.json());
  // return axios.get(URL).then(res => res.data);
 };

const updateTask = (id, status) => { 
  console.log('PUT');

  const options = {
    method: 'PUT',
    body: JSON.stringify({isDone: status}),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`${URL}/${id}`, options)
  // return axios.put(`${URL}/${id}`, {isDone: status});
};

const deleteTask = (id) => { 
  console.log('DELETE');

  const options = {
    method: 'DELETE'
  }

  return fetch(`${URL}/${id}`, options);
  // return axios.delete(`${URL}/${id}`);
};

export { saveTask, loadTasks, updateTask, deleteTask };

