import axios from 'axios';

export const getTodos = () => async (dispatch) => {
  try {
    dispatch({ type: 'TODO_LIST_REQUEST' });

    const { data } = await axios.get('/api/todos');

    dispatch({
      type: 'TODO_LIST_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'TODO_LIST_FAIL',
      payload: error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message,
    });
  }
};

export const createTodo = (task) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/todos', { task });

    dispatch({
      type: 'TODO_CREATE_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'TODO_CREATE_FAIL',
      payload: error.message,
    });
  }
};

// Add similar actions for update and delete
