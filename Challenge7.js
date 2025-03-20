var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.currentId = 1;
    }
    TaskManager.prototype.addTask = function (name) {
        if (typeof name === "string") {
            var newTask = {
                id: this.currentId++,
                name: name,
                status: 'Not Completed'
            };
            this.tasks.push(newTask);
        }
        else
            console.log('invalid input type');
    };
    TaskManager.prototype.completeTask = function (id) {
        if (isNaN(id) || id <= 0) {
            console.log('invalid task id');
        }
        else {
            this.tasks.map(function (task) {
                if (task.id === id) {
                    if (task.status == 'Not Completed') {
                        task.status = 'Completed';
                    }
                    else
                        console.log('Task Already Completed');
                }
            });
        }
    };
    TaskManager.prototype.displayTasks = function () {
        this.tasks.forEach(function (task) {
            console.log("Task ID ".concat(task.id, ", Name: \"").concat(task.name, "\", Status: ").concat(task.status));
        });
    };
    return TaskManager;
}());
var taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.displayTasks();
