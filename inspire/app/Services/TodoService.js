import { ProxyState } from "../AppState.js";
import Todo from "../models/Todo.js";
import { api } from "../Services/AxiosService.js";


let url = 'Cody/todos/'


class TodoService {


    async getTodos() {
        console.log("Getting the Todo List");
        let res = await api.get(url);
        ProxyState.todos = res.data.map(t => new Todo(t))
    }

    async addTodo(newTodo) {
        let res = await api.post(url, newTodo);
        console.log(res.data)
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    }

    async toggleTodoStatus(todoId) {
        let todo = await ProxyState.todos.find(todo => todo.id == todoId);
        if (todo.completed == true) {
            todo.completed = false
        } else if (todo.completed == false) {
            todo.completed = true;
        }

        let res = await api.put(url + todoId, todo)
    }

    async removeTodo(todoId) {
        let res = api.delete(url + todoId)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != todoId)


    }
}

const todoService = new TodoService();
export default todoService;