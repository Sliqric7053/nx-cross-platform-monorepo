import { Injectable } from '@nestjs/common';
import { Message } from '@nx-cross-platform-monorepo/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
