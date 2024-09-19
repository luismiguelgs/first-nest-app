import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    index(@Req() request:Request, @Res() response: Response){
        console.log(request.url)
        response.status(200).json({
            message: 'Hello World'
        })
    }
    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
        return '404 not found'
    }

    @Get('error')
    @HttpCode(500)
    errorPage(){
        return '500 error route'
    }

    @Get('ticket/:num')
    getNumeber(@Param('num', ParseIntPipe) num: number){
        return num + 14
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status:boolean){
        console.log(typeof status);
        return status        
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query:{name:string, age:number}){
        console.log(typeof query.age);
        console.log(typeof query.name);
        
        return `Hello ${query.name}, you are ${query.age} years old`
    }
}
