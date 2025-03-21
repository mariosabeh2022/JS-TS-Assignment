class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;
    addTask(name: string): void {
        if (typeof name === "string") {
            const newTask={
                id:this.currentId++,
                name:name,
                status:'Not Completed'
            }
            this.tasks.push(newTask);
        }
        else console.log('invalid input type')
    }
    completeTask(id: number): void {
        if(isNaN(id)||id<=0){
            console.log('invalid task id');
        }
        else{
        this.tasks.map((task)=>{
            if(task.id===id){
                if(task.status=='Not Completed'){
                    task.status='Completed';
                }
                else console.log('Task Already Completed')
            }
        });
        }
    }
    displayTasks(): void {
        this.tasks.forEach(task => {
            console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`) 
        });
    }
}

const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.displayTasks();