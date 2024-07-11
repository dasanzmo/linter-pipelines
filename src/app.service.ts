import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const points = 0;
    return 'Hello World!';
  }
}
