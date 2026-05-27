import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      status: 'ok',
      message: 'API is healthy',
      timestamp: new Date().toISOString(),
    };
  }
}
