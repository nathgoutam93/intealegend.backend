import { Controller,  Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['/', '/login', '/login-admin'])
  @Redirect('/app', 301)
  serveApp() {
    return "hello world!";
  }
}