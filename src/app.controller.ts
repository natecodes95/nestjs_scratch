import { Controller, Get } from "@nestjs/common";
// This is called a decorator, telling nest trying to create a class that is going to serve as a controller inside our application
// Class that is going to handle and route incoming requests

@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return "hi there!";
  }

  @Get("/bye")
  getByeThere() {
    return "bye there!";
  }
}
