import axios from 'axios';

class TodoModel {
    static all() { // Note also that all() is a static method. What does this mean? A static method can be called without there being an instance of the class containing the static method. This will allow us to call all() in the following way (without instantiating the class with new): let todos = TodoModel.all();
        let request = axios.get('https://jsonplaceholder.typicode.com/todos');
        return request;
    }
}

export default TodoModel;