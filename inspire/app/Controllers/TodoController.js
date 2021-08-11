import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import todoService from "../Services/TodoService.js";


function _drawTodos() {
    let template = ""
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById('todo').innerHTML = template
}


export default class TodoController {
    constructor() {
        ProxyState.on("todos", _drawTodos)
        todoService.getTodos();
        _drawTodos()
    }


    getTodos() {
        try {
            todoService.getTodos()
        } catch (error) {
            console.error(error)
        }
    }
    addTodo() {
        window.event.preventDefault();
        var form = window.event.target;
        let newTodo = {
            description: form['name'].value
        };
        try {
            todoService.addTodo(newTodo);
            //@ts-ignore
            form.reset()
        } catch (error) {
            console.error(error)
        }
    }

    /**
   * This method takes in an id of the Todo that should be togggled as complete
   * @param {string} todoId 
   */
    toggleTodoStatus(todoId) {
        try {
            todoService.toggleTodoStatus(todoId);
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * This method takes in an id of the Todo that should be removed
     * @param {string} todoId 
     */
    removeTodo(todoId) {
        try {
            todoService.removeTodo(todoId);
        } catch (error) {
            console.error(error)
        }
    }
}