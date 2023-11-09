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
const express_1 = __importDefault(require("express"));
const todos_controller_1 = __importDefault(require("../controllers/todos.controller"));
const router = express_1.default.Router();
const todoController = new todos_controller_1.default();
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todoController.getAllTodos();
        res.json(todos);
    }
    catch (err) {
        next(err);
    }
}));
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        const newTodo = yield todoController.createTodo({ title });
        res.status(201).json(newTodo);
    }
    catch (err) {
        next(err);
    }
}));
router.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        const todo = yield todoController.updateTodo(id, {
            title,
            completed,
        });
        res.json(todo);
    }
    catch (err) {
        next(err);
    }
}));
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield todoController.deleteTodo(id);
        res.json(deleted);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3Mucm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy90b2Rvcy5yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBMkU7QUFDM0UsdUZBQTZEO0FBRTdELE1BQU0sTUFBTSxHQUFXLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDeEMsTUFBTSxjQUFjLEdBQUcsSUFBSSwwQkFBYyxFQUFFLENBQUM7QUFFNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUN0RSxJQUFJO1FBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2I7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUN2RSxJQUFJO1FBQ0EsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDM0IsTUFBTSxPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMzRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNqQztJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2I7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUN6RSxJQUFJO1FBQ0EsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDMUIsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RDLE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsS0FBSztZQUNMLFNBQVM7U0FDWixDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDYjtBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sRUFDTixDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQ3RELElBQUk7UUFDQSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMxQixNQUFNLE9BQU8sR0FBRyxNQUFNLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNyQjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2I7QUFDTCxDQUFDLENBQUEsQ0FDSixDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDIn0=