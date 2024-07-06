import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as fs from 'fs';

@Injectable()
export class AuthService {
  private oauth2Client;

  constructor() {
    const keyFile = 'credentials.json';
    const key = JSON.parse(fs.readFileSync(keyFile, 'utf8'));

    this.oauth2Client = new google.auth.GoogleAuth({
      credentials: key,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });
  }

  async createEvent(event) {
    const auth = await this.oauth2Client.getClient();
    const calendar = google.calendar({ version: 'v3', auth });
    try {
      const response = await calendar.events.insert({
        calendarId: 'your-email here',
        requestBody: event,
      });
      console.log('Event created:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  }
}
