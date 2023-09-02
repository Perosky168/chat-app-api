import { IAuthJob } from 'src/features/auth/interfaces/auth.interface';
import { BaseQueue } from './base.queue';
import { authWorker } from 'src/shared/workers/auth.worker';

class AuthQueue extends BaseQueue {
  constructor() {
    super('auth');
    this.processJob('addAuthUserToDB', 5, authWorker.addAuthUserJob);
  }

  public addAuthUserJob(name: string, data: IAuthJob): void {
    this.addJob(name, data);
  }
}

export const authQueue: AuthQueue = new AuthQueue();
