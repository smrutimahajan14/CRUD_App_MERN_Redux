const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  
  export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TODO_LIST_REQUEST':
        return { ...state, loading: true };
      case 'TODO_LIST_SUCCESS':
        return { ...state, loading: false, todos: action.payload };
      case 'TODO_LIST_FAIL':
        return { ...state, loading: false, error: action.payload };
      case 'TODO_CREATE_SUCCESS':
        return { ...state, todos: [...state.todos, action.payload] };
      case 'TODO_CREATE_FAIL':
        return { ...state, error: action.payload };
      // Add cases for update and delete
      default:
        return state;
    }
  };
  