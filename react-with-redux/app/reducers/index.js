import { combineReducers } from 'redux';
import { ADD_TODO, DEL_TODO, TOGGLE_TODO, TOGGLE_ALL_TODOS, CLEAR_DONE_TODOS } from '../constants/todo.js';

// 初始化state的值
const initState = [];

let todos = (state = initState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					todoText : action.text,
					status   : '',
					id       : ++state.length,
					time     : 'now'
				}
			];

		case DEL_TODO:
			return state.filter((todo) => todo.id !== action.id);

		case TOGGLE_TODO:
			return state.map((todo) => {
				if ( todo.id === action.id ) {
					todo.status = (  todo.status === 'done'
								   ? ''
								   : 'done'  );
				}
				return todo;
			});

		case TOGGLE_ALL_TODOS:
			return state.map((todo) => {
				todo.status = action.filter;
				return todo;
			});

		case CLEAR_DONE_TODOS:
			return state.filter((todo) => todo.status === '');
			
		default: 
			return state;
	}
}

let todoApp = combineReducers({
	todos
});

export default todoApp;
