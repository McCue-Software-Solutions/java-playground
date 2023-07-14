import { Injectable } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
