import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('/users')
export class UsersController 
{
    constructor(private usersService: UsersService){}

    
    @Get()
    getUsers(){
        return this.usersService.getUsers()
    }

    @Post()
    @UsePipes(new ValidationPipe({
        whitelist: true
    }))
    createUser(@Body() user:CreateUserDto){
        return this.usersService.createUser(user)
    }
}
