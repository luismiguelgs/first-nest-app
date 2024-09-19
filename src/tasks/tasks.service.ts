import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TasksService{

    private tasks = [];
    getTasks(){
        return this.tasks
    }
    getTask(id:number){
        const taskFound =  this.tasks.find(task => task.id === id)
        if(!taskFound){
            return new NotFoundException('Task not found')
        }
        return taskFound
    }
    createTask(task:CreateTaskDto){
        console.log(task)
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return task
    }
    updateTask(){
        return 'updating tasks'
    }
    deleteTask(){
        return 'deleting tasks'
    }
    updateTaskStatus(){
        return 'updating tasks status'
    }
}