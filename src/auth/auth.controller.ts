import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('createEvent')
  async createEvent(@Body() event) {
    const eventData = {
      summary: event.title,
      description: event.description,
      start: {
        dateTime: event.date
      },
      end: {
        dateTime: new Date(new Date(event.date).getTime() + 60 * 60 * 1000)
      },
    };

    const createdEvent = await this.authService.createEvent(eventData);
    return {msg: 'evento criado', createdEvent}; 
  }
}
