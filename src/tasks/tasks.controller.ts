import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('tasks')
@Controller('tasks')
export class TaskController
{
    constructor(private tasksService:TasksService){}
    
    @Get()
    @ApiOperation({summary:'Get all tasks'})
    @ApiResponse({status:200, description: 'Return all tasks'})
    @ApiResponse({status:403, description: 'Forbidden'})
    getAllTasks(@Query() query: any){
        console.log(query);
        return this.tasksService.getTasks()
    }
    @Get('/:id')
    getTask(@Param('id') id:string){
        return this.tasksService.getTask(parseInt(id))
    }

    @Post()
    @ApiOperation({summary:'Create a task'})
    @UsePipes(new ValidationPipe)
    crateTasks(@Body() task:CreateTaskDto){
        return this.tasksService.createTask(task)
    }
    @Put()
    updateTasks(@Body() task:UpdateTaskDto){
        return this.tasksService.updateTask()
    }
    @Delete()
    deleteTasks(){
        return this.tasksService.deleteTask()
    }
    @Patch()
    updateTasksStatus(){
        return this.tasksService.updateTaskStatus()
    }
}