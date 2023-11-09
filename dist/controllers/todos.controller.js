"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_model_1 = __importDefault(require("../models/Todo.model"));
class TodoController {
    getAllTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return Todo_model_1.default.find({});
        });
    }
    createTodo(todoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTodo = new Todo_model_1.default(todoData);
            return newTodo.save();
        });
    }
    updateTodo(todoId, todoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, completed } = todoData;
            const todo = yield Todo_model_1.default.findById(todoId);
            todo.completed = completed;
            todo.title = title;
            yield todo.save();
            return todo;
        });
    }
    deleteTodo(todoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Todo_model_1.default.findByIdAndDelete(todoId);
            return result;
        });
    }
}
exports.default = TodoController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3MuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy90b2Rvcy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQXdDO0FBRXhDLE1BQU0sY0FBYztJQUNWLFdBQVc7O1lBQ2IsT0FBTyxvQkFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsUUFBMkI7O1lBQ3hDLE1BQU0sT0FBTyxHQUFHLElBQUksb0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQ1osTUFBYyxFQUNkLFFBQStDOztZQUUvQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLFFBQVEsQ0FBQztZQUN0QyxNQUFNLElBQUksR0FBRyxNQUFNLG9CQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxNQUFjOztZQUMzQixNQUFNLE1BQU0sR0FBRyxNQUFNLG9CQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxjQUFjLENBQUMifQ==