import { ADD_TODO, DEL_TODO, TOGGLE_TODO, TOGGLE_ALL_TODOS, CLEAR_DONE_TODOS } from '../constants/todo.js';

// 新增一条todo 
export const addTodo = (text) => {
	return {
		type: ADD_TODO,
		text: text
	};
}

// 删除一条todo
export const delTodo = (id) => {
	return {
		type : DEL_TODO,
		id   : id 		
	}
}

// 切换一条todo的状态
export const toggleTodo = (id) => {
	return {
		type  : TOGGLE_TODO,
		id    : id
	};
}

// 切换所有todo的状态
export const toggleAllTodos = (filter) => {
	return {
		type  : TOGGLE_ALL_TODOS,
		filter: filter 
	};
}

// 清空已经完成的todos
export const clearDoneTodos = () => {
	return {
		type: CLEAR_DONE_TODOS
	};
}
